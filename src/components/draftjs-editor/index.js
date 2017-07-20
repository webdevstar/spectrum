import React from 'react';
import styled from 'styled-components';
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from 'draft-js';
import DraftEditor, { composeDecorators } from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import createSingleLinePlugin from 'draft-js-single-line-plugin';
// NOTE(@mxstbr): This is necessary to make sure the placeholder is aligned
// and stuff like that.
import 'draft-js/dist/Draft.css';

import MediaInput from '../mediaInput';
import { LinkPreview, LinkPreviewLoading } from '../linkPreview';
import { Wrapper, MediaRow } from '../editor/style';
import { ThreadDescription } from '../threadComposer/style';
import Image, { ImageContainer, ActiveOverlay } from '../editor/Image';

const ImageComponent = props => {
  const {
    block, // eslint-disable-line no-unused-vars
    theme, // eslint-disable-line no-unused-vars
    blockProps, // eslint-disable-line no-unused-vars
    customStyleMap, // eslint-disable-line no-unused-vars
    customStyleFn, // eslint-disable-line no-unused-vars
    decorator, // eslint-disable-line no-unused-vars
    forceSelection, // eslint-disable-line no-unused-vars
    offsetKey, // eslint-disable-line no-unused-vars
    selection, // eslint-disable-line no-unused-vars
    tree, // eslint-disable-line no-unused-vars
    contentState, // eslint-disable-line no-unused-vars
    ...elementProps
  } = props;
  const active = props.blockProps.isFocused;
  const { src } = contentState.getEntity(block.getEntityAt(0)).getData();
  return (
    <ImageContainer active={active}>
      <ActiveOverlay active={active} />
      <Image src={src} active={active} {...elementProps} />
    </ImageContainer>
  );
};

const toPlainText = editorState =>
  editorState.getCurrentContent().getPlainText();

const fromPlainText = text =>
  EditorState.createWithContent(ContentState.createFromText(text));

const toJSON = editorState => convertToRaw(editorState.getCurrentContent());
const fromJSON = json => convertFromRaw(json);

type EditorProps = {
  markdown?: boolean,
  state?: Object,
  onChange?: Function,
  onEnter?: Function,
  placeholder?: string,
  singleLine?: boolean,
  className?: string,
  style?: Object,
  images?: boolean,
};

class Editor extends React.Component {
  props: EditorProps;
  editor: any;

  constructor(props) {
    super(props);

    const focusPlugin = createFocusPlugin();
    const dndPlugin = createBlockDndPlugin();

    const decorator = composeDecorators(
      focusPlugin.decorator,
      dndPlugin.decorator
    );

    const imagePlugin = createImagePlugin({
      decorator,
      imageComponent: ImageComponent,
    });

    const singleLine = createSingleLinePlugin();

    this.state = {
      plugins: [
        props.image !== false && imagePlugin,
        props.markdown !== false && createMarkdownShortcutsPlugin(),
        props.image !== false && dndPlugin,
        props.image !== false && focusPlugin,
        props.singleLine === true && singleLine,
      ],
      singleLineBlockRenderMap: singleLine.blockRenderMap,
      addImage: imagePlugin.addImage,
      editorState: props.initialState || EditorState.createEmpty(),
    };
  }

  onChange = editorState => {
    this.setState({
      editorState,
    });
  };

  addImages = files => {
    let { editorState, addImage } = this.state;
    // Add images to editorState
    // eslint-disable-next-line
    for (var i = 0, file; (file = files[i]); i++) {
      editorState = addImage(editorState, window.URL.createObjectURL(file));
    }

    this.onChange(editorState);
  };

  addImage = e => {
    this.addImages(e.target.files);
  };

  handleDroppedFiles = (selection, files) => {
    this.addImages(files);
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    const {
      state = this.state.editorState,
      onChange = this.onChange,
      markdown,
      onEnter,
      className,
      style,
      images,
      showLinkPreview,
      linkPreview,
      focus,
      singleLine,
      ...rest
    } = this.props;

    return (
      <Wrapper
        className={`${className} ${markdown !== false && 'markdown'}`}
        style={style}
        onClick={this.focus}
        focus={focus}
      >
        <DraftEditor
          editorState={state}
          onChange={onChange}
          plugins={this.state.plugins}
          handleDroppedFiles={this.handleDroppedFiles}
          blockRenderMap={
            singleLine === true && this.state.singleLineBlockRenderMap
          }
          ref={editor => {
            this.editor = editor;
            if (this.props.editorRef) this.props.editorRef(editor);
          }}
          {...rest}
        />
        {showLinkPreview && linkPreview && linkPreview.loading
          ? <LinkPreviewLoading margin={'16px 0 24px 0'} />
          : showLinkPreview && linkPreview && linkPreview.data
            ? <LinkPreview
                data={linkPreview.data}
                size={'large'}
                remove={linkPreview.remove}
                editable={true}
                trueUrl={linkPreview.trueUrl}
                margin={'16px 0 24px 0'}
              />
            : null}
        {images !== false &&
          <MediaRow>
            <MediaInput onChange={this.addImage} multiple>
              Add
            </MediaInput>
          </MediaRow>}
      </Wrapper>
    );
  }
}

export { toPlainText, fromPlainText, toJSON, fromJSON };

export default Editor;
