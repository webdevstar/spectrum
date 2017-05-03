//@flow
import React from 'react';
//$FlowFixMe
import branch from 'recompose/branch';
//$FlowFixMe
import renderComponent from 'recompose/renderComponent';
//$FlowFixMe
import compose from 'recompose/compose';
//$FlowFixMe
import pure from 'recompose/pure';
//$FlowFixMe
import withProps from 'recompose/withProps';

import { Loading } from '../../components/loading';
import { GoopyThree } from '../../views/homepage/style';
import { FlexCol } from '../../components/globals';
import {
  ScrollBody,
  ViewHeader,
  ViewTitle,
  ViewSubtitle,
  Section,
  SectionTitle,
  SectionSubtitle,
  Row,
  Item,
  ItemTitle,
  ItemMeta,
  ItemCopy,
  ButtonContainer,
  ItemButton,
  Constellations,
  ErrorState,
} from './style';

import { getFrequency, getCommunity, getTopFrequencies } from './queries';

const CURATED_FREQUENCIES = {
  title: '5 cool ways to use frequencies',
  subtitle: 'News, journaling, communities, show and tell, and recommendations...',
  items: [
    { id: '0304595c-afbe-4b7c-8335-082971838097', type: 'frequency' },
    { id: '06c877e9-b872-42ef-9416-aa1d465888df', type: 'frequency' },
    { id: '0352f4f5-8e12-4de8-8299-9a6664f77ee0', type: 'frequency' },
    { id: '16bf0f80-0335-4fbb-8d4d-ccfe5c8c8162', type: 'frequency' },
    { id: '03426243-2c9c-4f99-bc77-867e37f8e4e3', type: 'frequency' },
  ],
};

const CURATED_COMMUNITIES = {
  title: 'Community Center',
  subtitle: 'Join some new communities and discover new things!',
  items: [
    { id: '402f0610-b28f-4ada-b59c-f5e5b67aca59', type: 'community' },
    { id: 'e44b03c9-be93-463b-ae5b-08173cb4010c', type: 'community' },
    { id: 'fbb87abe-2735-4630-92f5-674b6f5dcbb9', type: 'community' },
    { id: '77f5720c-cc39-4486-9766-ac0f1c8c1334', type: 'community' },
    { id: 'a4338203-2938-425e-a7f8-992c58e3492b', type: 'community' },
  ],
};

const ErrorItem = i => {
  return (
    <ErrorState>
      <FlexCol>
        <ItemTitle>Whoops...</ItemTitle>
        <ItemCopy>The server disconnected. Please refresh the page.</ItemCopy>
      </FlexCol>
      <ButtonContainer center>
        <ItemButton>Refresh</ItemButton>
      </ButtonContainer>
    </ErrorState>
  );
};

const Frequency = ({ data: { frequency } }, i) => {
  if (!frequency) {
    return <div />;
  }
  return (
    <Item key={frequency.id}>
      <FlexCol>
        <ItemTitle>~ {frequency.name}</ItemTitle>
        <ItemMeta>{frequency.community.name}</ItemMeta>
        <ItemCopy>{frequency.description}</ItemCopy>
      </FlexCol>
      <ButtonContainer>
        <ItemButton>Join</ItemButton>
      </ButtonContainer>
    </Item>
  );
};

const Community = ({ data: { community } }, i) => {
  if (!community) {
    return <div />;
  }
  return (
    <Item key={community.id}>
      <FlexCol>
        <ItemTitle>{community.name}</ItemTitle>
        <ItemMeta>{community.metaData.members} members</ItemMeta>
      </FlexCol>
      <ButtonContainer>
        <ItemButton>Join</ItemButton>
      </ButtonContainer>
    </Item>
  );
};

const displayLoadingState = branch(
  props => !props.data || props.data.loading,
  renderComponent(Loading)
);

const composeSectionFromList = list => {
  return (
    <Section>
      <SectionTitle>{list.title}</SectionTitle>
      <SectionSubtitle>{list.subtitle}</SectionSubtitle>
      <Row>
        {list.items.map(entity => {
          if (entity.type === 'frequency') {
            const EntityWithData = compose(
              withProps({ id: entity.id, key: entity.id }),
              getFrequency,
              displayLoadingState
            )(Frequency);

            return EntityWithData();
          } else if (entity.type === 'community') {
            const EntityWithData = compose(
              withProps({ id: entity.id, key: entity.id }),
              getCommunity,
              displayLoadingState
            )(Community);

            return EntityWithData();
          } else {
            return;
          }
        })}
      </Row>
    </Section>
  );
};

const TopThirtyPure = ({ data: { topFrequencies, error } }, i) => {
  if (error) {
    return (
      <Section>
        <ErrorItem />
      </Section>
    );
  }
  return (
    <Section>
      <SectionTitle>Best of Beta</SectionTitle>
      <SectionSubtitle>
        The 30 most-popular pre-launch frequencies
      </SectionSubtitle>
      <Row>
        {topFrequencies.map(frequency => {
          return Frequency({ data: { frequency: frequency } });
        })}
      </Row>
    </Section>
  );
};

const TopThirty = compose(getTopFrequencies, displayLoadingState)(
  TopThirtyPure
);

const ExplorePure = ({ match }) => {
  return (
    <ScrollBody>
      <ViewHeader>
        <ViewTitle>Explore</ViewTitle>
        <ViewSubtitle>
          Discover more of what Spectrum has to offer!
        </ViewSubtitle>
        <Constellations />
        <GoopyThree />
      </ViewHeader>
      <TopThirty />
      {composeSectionFromList(CURATED_FREQUENCIES)}
      {composeSectionFromList(CURATED_COMMUNITIES)}
    </ScrollBody>
  );
};

const Explore = pure(ExplorePure);
export default Explore;
