import React from 'react';
import styled, { withTheme } from 'styled-components';

const Svg = styled.svg`
fill: ${props =>
  props.stayActive ? `url(#${props.color}Gradient)` : props.theme.inactive};
	transition: all 0.2s ease-out;
  max-width: 100%;

	&:hover {
    fill: ${props => props.theme.brand.default}
		fill: url(#${props => props.color ? props.color : `brand`}Gradient);
		transition: all 0.2s ease-in;
		cursor: pointer;
    transform: scale(1.1);
	}
`;

const Defs = withTheme(props => {
  return (
    <defs>
      <radialGradient
        id="warnGradient"
        fx="0%"
        fy="0%"
        r="100%"
        spreadMethod="pad"
      >
        <stop offset="0%" stopColor={props.theme.warn.alt} stopOpacity="1" />
        <stop
          offset="100%"
          stopColor={props.theme.warn.default}
          stopOpacity="1"
        />
      </radialGradient>
      <radialGradient
        id="successGradient"
        fx="0%"
        fy="0%"
        r="100%"
        spreadMethod="pad"
      >
        <stop offset="0%" stopColor={props.theme.success.alt} stopOpacity="1" />
        <stop
          offset="100%"
          stopColor={props.theme.success.default}
          stopOpacity="1"
        />
      </radialGradient>
      <radialGradient
        id="brandGradient"
        fx="0%"
        fy="0%"
        r="100%"
        spreadMethod="pad"
      >
        <stop offset="0%" stopColor={props.theme.brand.alt} stopOpacity="1" />
        <stop
          offset="100%"
          stopColor={props.theme.brand.default}
          stopOpacity="1"
        />
      </radialGradient>

      <radialGradient
        id="facebookGradient"
        fx="0%"
        fy="0%"
        r="100%"
        spreadMethod="pad"
      >
        <stop
          offset="0%"
          stopColor={props.theme.social.facebook.alt}
          stopOpacity="1"
        />
        <stop
          offset="100%"
          stopColor={props.theme.social.facebook.default}
          stopOpacity="1"
        />
      </radialGradient>

      <radialGradient
        id="twitterGradient"
        fx="0%"
        fy="0%"
        r="100%"
        spreadMethod="pad"
      >
        <stop
          offset="0%"
          stopColor={props.theme.social.twitter.alt}
          stopOpacity="1"
        />
        <stop
          offset="100%"
          stopColor={props.theme.social.twitter.default}
          stopOpacity="1"
        />
      </radialGradient>
      <radialGradient
        id="flatWhiteGradient"
        fx="0%"
        fy="0%"
        r="100%"
        spreadMethod="pad"
      >
        <stop
          offset="0%"
          stopColor={props.theme.text.reverse}
          stopOpacity="1"
        />
        <stop
          offset="100%"
          stopColor={props.theme.text.reverse}
          stopOpacity="1"
        />
      </radialGradient>
    </defs>
  );
});

export const Attachment = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="attachment"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Attachment</title>
      <Defs />
      <path
        d="M7.17,21.67c-1.381,2.392 -0.562,5.45 1.83,6.83c2.391,1.381 5.449,0.562 6.83,-1.83l4,-6.928l1,-1.732l4,-6.928c1.381,-2.392 0.561,-5.45 -1.83,-6.83c-2.392,-1.381 -5.45,-0.562 -6.83,1.83l-0.5,0.866c-0.276,0.478 -0.113,1.09 0.366,1.366c0.478,0.276 1.09,0.112 1.366,-0.366l0.5,-0.866c0.828,-1.435 2.663,-1.927 4.098,-1.098c1.435,0.828 1.926,2.663 1.098,4.098l-0.5,0.866l-3.5,6.062l-1,1.732l-4,6.928c-0.829,1.435 -2.663,1.927 -4.098,1.098c-1.435,-0.828 -1.927,-2.663 -1.098,-4.098l2,-3.464l4,-6.928c0.276,-0.478 0.887,-0.642 1.366,-0.366c0.478,0.276 0.642,0.888 0.366,1.366l-4,6.928c-0.276,0.479 -0.112,1.09 0.366,1.366c0.478,0.276 1.09,0.113 1.366,-0.366l4,-6.928c0.828,-1.435 0.337,-3.27 -1.098,-4.098c-1.435,-0.829 -3.27,-0.337 -4.098,1.098l-4,6.928l-2,3.464Z"
      />
    </Svg>
  );
};

export const Back = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="back"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Back</title>
      <Defs />
      <path
        d="M19.616,23.108c0.353,-0.424 0.296,-1.055 -0.128,-1.408c-1.645,-1.377 -5.466,-4.762 -6.775,-6.482c1.331,-1.749 5.1,-5.085 6.775,-6.482c0.424,-0.353 0.481,-0.984 0.128,-1.408c-0.354,-0.425 -0.985,-0.482 -1.409,-0.128c-1.84,1.532 -5.8,4.993 -7.201,6.964c-0.218,0.312 -0.409,0.664 -0.409,1.054c0,0.39 0.191,0.742 0.409,1.053c1.373,1.932 5.399,5.462 7.2,6.964l0.001,0.001c0.425,0.354 1.055,0.296 1.409,-0.128Z"
      />
    </Svg>
  );
};

export const ClosePost = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="closePost"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Close Post</title>
      <Defs />
      <path
        id="closePost"
        d="M16,5.986c5.1,0 7.247,0.575 8.336,1.664c1.089,1.089 1.664,3.236 1.664,8.336c0,5.1 -0.575,7.247 -1.664,8.336c-1.089,1.088 -3.236,1.664 -8.336,1.664c-5.1,0 -7.247,-0.575 -8.336,-1.664c-1.089,-1.089 -1.664,-3.236 -1.664,-8.336c0,-5.1 0.575,-7.247 1.664,-8.336c1.089,-1.089 3.236,-1.664 8.336,-1.664Zm0,-2c10,0 12,2 12,12c0,10 -2,12 -12,12c-10,0 -12,-2 -12,-12c0,-10 2,-12 12,-12Zm-4,11l8,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-8,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1Z"
      />
    </Svg>
  );
};

export const Delete = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="delete"
      aria-labelledby="title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="title">Delete</title>
      <Defs />
      <path
        d="M8.391 12.32c-.636-.131-1.248.368-1.213 1.016.808 14.714 1.271 14.711 7.681 14.669C15.22 28.003 15.6 28 16 28s.78.003 1.141.005c6.41.042 6.873.045 7.681-14.669.035-.648-.577-1.147-1.212-1.016a.975.975 0 0 0-.784.896c-.17 3.094-.323 5.51-.519 7.407-.266 2.584-.588 3.883-.95 4.566-.225.426-.422.586-1.067.701-.716.128-1.615.123-3.019.115h-.002a161.358 161.358 0 0 0-2.538 0h-.001c-1.405.008-2.304.013-3.02-.115-.645-.115-.842-.275-1.067-.701-.362-.683-.684-1.982-.95-4.566-.196-1.897-.349-4.313-.519-7.407a.975.975 0 0 0-.783-.896z"
      />
      <path
        d="M6 10a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
        fillRule="nonzero"
      />
      <path
        d="M12.25 7.973C12.112 8.185 12 8.5 12 9h-2c0-.81.186-1.525.576-2.121.366-.536.963-1.006 1.525-1.271C13.24 5.087 14.687 5 16 5c1.313 0 2.76.087 3.899.608.562.265 1.158.735 1.525 1.271C21.814 7.475 22 8.19 22 9h-2c0-.5-.112-.815-.25-1.027-.161-.272-.324-.388-.684-.546C18.36 7.103 17.306 7 16 7c-1.306 0-2.36.103-3.066.427-.36.158-.523.274-.684.546z"
      />
      <path
        d="M12.044 14.086a1 1 0 1 1 1.998-.087l.349 7.992a1 1 0 0 1-1.998.087l-.349-7.992zM17.956 13.999a1 1 0 0 1 1.998.087l-.348 7.993a1 1 0 0 1-1.999-.088l.349-7.992z"
        fillRule="nonzero"
      />
    </Svg>
  );
};

export const Flag = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="flag"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Flag</title>
      <Defs />
      <path
        d="M10.953 5.034a1 1 0 0 0-1.225.707L4.034 26.992a1 1 0 1 0 1.932.517l5.694-21.25a1 1 0 0 0-.707-1.225zm2.107 9.005c.425-1.703.798-3.036 1.225-4.079.429-1.058.766-1.43.912-1.532a.216.216 0 0 0 .022-.023l.017.003c.131-.022.133-.021.353.073l.065.028c.584.23 1.492.826 2.826 2.076 1.584 1.462 3.173 2.338 4.36 2.738a9.906 9.906 0 0 0 2.045.4c-.312 1.161-.627 2.297-1.028 3.334-.405 1.061-.756 1.774-1.284 2.307-.385.41-.719.542-1.131.527-.519-.018-1.447-.289-2.901-1.37-1.746-1.291-3.25-2.073-4.327-2.514a17.61 17.61 0 0 0-1.498-.524c.08-.375.193-.838.344-1.444zm12.104-1.615a.522.522 0 0 1 0 0zm-13.21 2.816l.017.008a.08.08 0 0 1-.017-.008zm-.834-1.685c1.727-6.93 3.174-9.634 8.727-4.43 2.833 2.655 4.933 2.646 6.14 2.641 1.16-.005 1.494-.007.86 2.359-1.294 4.83-3.053 10.796-9.5 6-2.638-1.962-4.392-2.486-5.449-2.801-1.526-.456-1.599-.478-.778-3.769z"
      />
    </Svg>
  );
};

export const Freeze = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="freeze"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Freeze</title>
      <Defs />
      <g>
        <path
          d="M17,4.923c0,-0.51 -0.448,-0.923 -1,-0.923c-0.552,0 -1,0.413 -1,0.923l0,2.414c-0.471,-0.313 -0.871,-0.673 -1.482,-1.227c-0.354,-0.424 -0.984,-0.482 -1.408,-0.128c-0.425,0.353 -0.482,0.984 -0.128,1.409c0.628,0.685 1.864,1.859 3.018,2.365l0,12.488c-1.154,0.506 -2.39,1.68 -3.018,2.365c-0.354,0.425 -0.297,1.056 0.128,1.409c0.424,0.354 1.054,0.296 1.408,-0.128c0.611,-0.554 1.011,-0.914 1.482,-1.227l0,2.414c0,0.51 0.448,0.923 1,0.923c0.552,0 1,-0.413 1,-0.923l0,-2.414c0.471,0.313 0.87,0.673 1.482,1.227c0.353,0.424 0.984,0.482 1.408,0.128c0.424,-0.353 0.481,-0.984 0.128,-1.409c-0.629,-0.685 -1.864,-1.859 -3.018,-2.365l0,-12.488c1.154,-0.506 2.389,-1.68 3.018,-2.365c0.353,-0.425 0.296,-1.056 -0.128,-1.409c-0.424,-0.354 -1.055,-0.296 -1.408,0.128c-0.612,0.554 -1.011,0.914 -1.482,1.227l0,-2.414Z"
        />
        <path
          d="M26.092,11.328c0.442,-0.255 0.576,-0.849 0.3,-1.328c-0.276,-0.478 -0.858,-0.659 -1.3,-0.404l-2.09,1.207c0.035,-0.564 0.148,-1.091 0.322,-1.897c0.191,-0.518 -0.075,-1.093 -0.593,-1.284c-0.519,-0.19 -1.094,0.076 -1.284,0.594c-0.279,0.887 -0.679,2.544 -0.54,3.796l-10.815,6.244c-1.015,-0.746 -2.65,-1.229 -3.557,-1.43c-0.545,-0.094 -1.062,0.27 -1.156,0.815c-0.094,0.544 0.27,1.061 0.815,1.155c0.785,0.252 1.297,0.418 1.803,0.67l-2.09,1.207c-0.442,0.255 -0.576,0.849 -0.3,1.327c0.276,0.479 0.858,0.66 1.3,0.405l2.09,-1.207c-0.035,0.564 -0.147,1.091 -0.322,1.897c-0.19,0.518 0.075,1.093 0.594,1.284c0.518,0.19 1.093,-0.076 1.284,-0.594c0.279,-0.887 0.678,-2.544 0.539,-3.797l10.815,-6.244c1.015,0.747 2.65,1.23 3.558,1.431c0.544,0.094 1.062,-0.27 1.156,-0.815c0.094,-0.544 -0.271,-1.061 -0.815,-1.155c-0.786,-0.253 -1.298,-0.418 -1.804,-0.67l2.09,-1.207Z"
        />
        <path
          d="M25.093,22.405c0.441,0.255 1.023,0.074 1.299,-0.405c0.276,-0.478 0.142,-1.072 -0.299,-1.327l-2.091,-1.207c0.507,-0.252 1.018,-0.418 1.804,-0.67c0.544,-0.094 0.909,-0.611 0.815,-1.155c-0.094,-0.545 -0.612,-0.909 -1.156,-0.815c-0.908,0.201 -2.542,0.684 -3.558,1.43l-10.815,-6.244c0.139,-1.252 -0.26,-2.909 -0.539,-3.796c-0.191,-0.518 -0.766,-0.784 -1.284,-0.594c-0.518,0.191 -0.784,0.766 -0.593,1.284c0.174,0.806 0.286,1.333 0.321,1.897l-2.09,-1.207c-0.442,-0.255 -1.023,-0.074 -1.3,0.404c-0.276,0.479 -0.142,1.073 0.3,1.328l2.09,1.207c-0.506,0.252 -1.018,0.417 -1.803,0.67c-0.544,0.094 -0.909,0.611 -0.815,1.155c0.094,0.545 0.612,0.909 1.156,0.815c0.907,-0.201 2.542,-0.684 3.557,-1.43l10.815,6.243c-0.138,1.253 0.261,2.91 0.54,3.797c0.19,0.518 0.765,0.784 1.284,0.594c0.518,-0.191 0.784,-0.766 0.593,-1.284c-0.174,-0.806 -0.287,-1.333 -0.322,-1.897l2.091,1.207Z"
        />
      </g>
    </Svg>
  );
};

export const Frequency = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="frequency"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Frequency</title>
      <Defs />
      <path
        d="M15.48,17.469c1.055,1.054 1.911,1.476 2.93,1.476c1.956,0 3.478,-1.594 3.657,-3.469c0.055,-0.58 -0.463,-1.007 -1.046,-1.007c-0.636,0 -1.115,0.516 -1.34,1.11c-0.248,0.653 -0.708,0.987 -1.365,0.987c-0.502,0 -0.981,-0.291 -1.75,-1.058c-0.005,-0.005 -0.01,-0.011 -0.015,-0.016c-1.051,-1.061 -1.905,-1.492 -2.922,-1.492c-1.917,0 -3.546,1.6 -3.702,3.483c-0.048,0.578 0.475,0.994 1.056,0.994c0.649,0 1.135,-0.529 1.371,-1.134c0.246,-0.632 0.697,-0.952 1.345,-0.952c0.528,0 0.973,0.269 1.781,1.078Z"
      />
    </Svg>
  );
};

export const Like = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="like"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Like</title>
      <Defs />
      <path
        d="M15.982 13.578l-1.414-1.414C12.876 10.473 11.364 10 10.232 10c-1.17 0-2.175.503-2.836 1.164-1.592 1.592-1.887 3.022-1.676 4.288.235 1.407 1.152 2.928 2.579 4.412 1.432 1.501 3.108 2.703 4.719 3.616.789.451 1.453.769 2.062 1.001.344.134.65.199.809.233l.093.02.092-.02c.159-.034.466-.099.81-.233.608-.232 1.273-.55 2.062-1.001 1.611-.913 3.287-2.115 4.719-3.616 1.427-1.484 2.344-3.005 2.578-4.412.211-1.266-.083-2.696-1.675-4.288A4.035 4.035 0 0 0 21.732 10c-1.132 0-2.644.473-4.336 2.164l-1.414 1.414zm0-2.828c4-4 8-3 10-1 8 8-7 17-10 17s-18-9-10-17c2-2 6-3 10 1z"
      />
    </Svg>
  );
};

export const Liked = props => {
  return (
    <svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="liked"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Liked</title>
      <Defs />
      <path
        d="M25.982 9.75c-2-2-6-3-10 1-4-4-8-3-10-1-8 8 7 17 10 17s18-9 10-17z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export const Lock = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="lock"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Lock</title>
      <Defs />
      <path
        d="M19.196 6.238C18.44 6.041 17.479 5.999 16 6c-1.479-.001-2.44.041-3.195.238-.606.15-.826.343-.976.551-.208.291-.451.872-.613 2.111-.119.895-.178 1.972-.202 3.315C12.316 12.052 13.951 12 16 12s3.684.052 4.986.215c-.024-1.343-.083-2.42-.201-3.315-.162-1.239-.406-1.82-.614-2.111-.15-.208-.37-.401-.976-.551zm3.797 6.403C22.894 4.897 21.803 4 16.001 4s-6.893.897-6.992 8.641c-2.604.885-3.008 2.911-3.008 7.359 0 7 1 8 10 8s10-1 10-8c0-4.448-.404-6.474-3.008-7.359zm-5.992 8.092a2 2 0 1 0-2 0V22a1 1 0 0 0 2 0v-1.267z"
      />
    </Svg>
  );
};

export const Menu = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="menu"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Menu</title>
      <Defs />
      <g>
        <path
          d="M9,10c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"
        />
        <path
          d="M9,15c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"
        />
        <path
          d="M9,20c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"
        />
      </g>
    </Svg>
  );
};

export const NewPost = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="newPost"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">New Post</title>
      <Defs />
      <path
        d="M16 6c5.1 0 7.247.575 8.336 1.664C25.425 8.753 26 10.9 26 16s-.575 7.247-1.664 8.336C23.247 25.425 21.1 26 16 26s-7.247-.575-8.336-1.664C6.575 23.247 6 21.1 6 16s.575-7.247 1.664-8.336C8.753 6.575 10.9 6 16 6zm0-2c10 0 12 2 12 12s-2 12-12 12S4 26 4 16 6 4 16 4zm-1 8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3z"
      />
    </Svg>
  );
};

export const Photo = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="photo"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Photo</title>
      <Defs />
      <g>
        <path
          d="M25.698,22.196c0.248,-1.511 0.302,-3.475 0.302,-6.196c0,-2.716 -0.063,-4.673 -0.324,-6.181c-0.245,-1.442 -0.619,-2.125 -1.019,-2.521c-0.403,-0.397 -1.093,-0.761 -2.534,-0.996c-1.502,-0.249 -3.445,-0.302 -6.123,-0.302c-2.678,0 -4.621,0.053 -6.123,0.302c-1.441,0.235 -2.131,0.599 -2.534,0.996c-0.4,0.396 -0.774,1.079 -1.019,2.521c-0.261,1.508 -0.324,3.465 -0.324,6.181c0,2.721 0.053,4.685 0.302,6.196c0.235,1.45 0.6,2.127 0.987,2.515c0.388,0.387 1.065,0.752 2.515,0.987c1.511,0.249 3.475,0.302 6.196,0.302c2.721,0 4.685,-0.053 6.196,-0.302c1.45,-0.235 2.127,-0.6 2.515,-0.987c0.387,-0.388 0.752,-1.065 0.987,-2.515Zm-9.698,5.804c11,0 12,-1 12,-12c0,-11 -1.169,-12 -12,-12c-10.831,0 -12,1 -12,12c0,11 1,12 12,12Z"
        />
        <path
          d="M8.556,20.674c-0.706,-0.103 -1.385,0.459 -1.28,1.164c0.06,0.406 0.379,0.72 0.784,0.784c1.958,0.308 4.539,0.378 7.94,0.378c3.4,0 5.982,-0.07 7.939,-0.378c0.406,-0.064 0.724,-0.378 0.785,-0.784c0.105,-0.705 -0.574,-1.267 -1.28,-1.164c-0.038,0.006 -0.077,0.011 -0.116,0.017c-0.001,0 -0.002,0 -0.002,0c-1.802,0.253 -4.143,0.309 -7.326,0.309c0,0 0,0 0,0c-3.183,0 -5.524,-0.056 -7.326,-0.309c0,0 -0.001,0 -0.002,0c-0.039,-0.006 -0.078,-0.011 -0.116,-0.017Z"
        />
        <path
          d="M11.722,10.034c-0.808,-0.186 -1.612,0.319 -1.798,1.126c-0.045,0.195 -0.049,0.39 -0.019,0.576c0.05,0.307 -0.056,0.664 -0.323,0.825c-0.107,0.065 -0.212,0.133 -0.316,0.204c-0.465,0.319 -1.106,0.201 -1.256,-0.343c-0.149,-0.54 -0.169,-1.125 -0.035,-1.71c0.433,-1.884 2.311,-3.06 4.194,-2.627c1.884,0.432 3.061,2.31 2.628,4.194c-0.055,0.241 -0.134,0.471 -0.234,0.687c-0.268,0.58 -1.007,0.479 -1.431,0.001c-0.052,-0.06 -0.107,-0.118 -0.164,-0.174c-0.208,-0.207 -0.25,-0.546 -0.158,-0.825c0.015,-0.044 0.027,-0.09 0.038,-0.136c0.185,-0.808 -0.319,-1.613 -1.126,-1.798Zm1.5,7.742c0.407,0.341 1.013,0.286 1.352,-0.124c0.251,-0.296 0.501,-0.6 0.752,-0.905l0.001,0c1.088,-1.32 2.208,-2.677 3.551,-3.705c1.424,1.09 2.563,2.484 3.694,3.868l0.001,0.001c0.203,0.248 0.405,0.495 0.609,0.741c0.339,0.41 0.945,0.465 1.352,0.124c0.403,-0.338 0.457,-0.957 0.122,-1.361c-0.216,-0.26 -0.432,-0.524 -0.651,-0.791l-0.007,-0.009c-1.239,-1.514 -2.533,-3.095 -4.108,-4.221c-0.299,-0.211 -0.637,-0.394 -1.012,-0.394c-0.375,0 -0.713,0.183 -1.012,0.394c-1.581,1.13 -2.909,2.754 -4.163,4.287l0,0c-0.203,0.248 -0.405,0.494 -0.604,0.735c-0.34,0.41 -0.285,1.018 0.123,1.36Zm-0.421,-2.606c0.275,-0.312 0.271,-0.778 -0.024,-1.072c-0.231,-0.23 -0.483,-0.464 -0.763,-0.704c-0.299,-0.211 -0.637,-0.394 -1.012,-0.394c-0.375,0 -0.728,0.171 -1.012,0.394c-1.441,1.135 -1.99,2.084 -2.767,3.022c-0.34,0.41 -0.285,1.018 0.123,1.36c0.407,0.341 1.013,0.286 1.352,-0.124c0.802,-1.152 1.292,-1.652 2.304,-2.61c0.089,0.084 0.173,0.165 0.254,0.242c0.42,0.401 1.161,0.321 1.545,-0.114Z"
        />
      </g>
    </Svg>
  );
};

export const PrivateFrequency = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="private-frequency"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Private Frequency</title>
      <Defs />
      <path
        d="M19.196,6.238c-0.756,-0.197 -1.717,-0.239 -3.196,-0.238c-1.479,-0.001 -2.44,0.041 -3.195,0.238c-0.606,0.15 -0.826,0.343 -0.976,0.551c-0.208,0.291 -0.451,0.872 -0.613,2.111c-0.119,0.895 -0.178,1.972 -0.202,3.315c1.302,-0.163 2.937,-0.215 4.986,-0.215c2.049,0 3.684,0.052 4.986,0.215c-0.024,-1.343 -0.083,-2.42 -0.201,-3.315c-0.162,-1.239 -0.406,-1.82 -0.614,-2.111c-0.15,-0.208 -0.37,-0.401 -0.976,-0.551Zm3.797,6.403c-0.099,-7.744 -1.19,-8.641 -6.992,-8.641c-5.802,0 -6.893,0.897 -6.992,8.641c-2.604,0.885 -3.008,2.911 -3.008,7.359c0,7 1,8 10,8c9,0 10,-1 10,-8c0,-4.448 -0.404,-6.474 -3.008,-7.359Zm-9.992,8.369c-0.006,0.548 -0.451,0.99 -1,0.99c-0.552,0 -1,-0.448 -1,-1l1,0c-1,0 -1,0 -1,-0.001l0,-0.001l0,-0.002l0,-0.005l0,-0.013l0.001,-0.034c0.001,-0.02 0.003,-0.061 0.005,-0.101c0.005,-0.069 0.018,-0.194 0.039,-0.32c0.038,-0.227 0.142,-0.62 0.311,-0.97c0.394,-0.789 1.213,-1.553 2.644,-1.553c1.415,0 2.171,0.756 2.681,1.267l0.026,0.026c0.49,0.489 0.733,0.707 1.293,0.707c0.569,0 0.75,-0.236 0.856,-0.447c0.081,-0.15 0.102,-0.257 0.126,-0.405c0.011,-0.061 0.014,-0.093 0.017,-0.133c0.001,-0.014 0.001,-0.017 0.001,-0.025c0.006,-0.547 0.451,-0.99 1,-0.99c0.552,0 1,0.448 1,1l-1,0c1,0 1,0.001 1,0.001l0,0.008l0,0.013l-0.001,0.034c-0.001,0.02 -0.003,0.061 -0.005,0.101c-0.006,0.069 -0.018,0.194 -0.039,0.32c-0.039,0.227 -0.142,0.62 -0.311,0.97c-0.394,0.789 -1.213,1.553 -2.644,1.553c-1.415,0 -2.171,-0.756 -2.681,-1.267l-0.026,-0.026c-0.49,-0.489 -0.733,-0.707 -1.293,-0.707c-0.569,0 -0.75,0.236 -0.856,0.447c-0.081,0.15 -0.102,0.257 -0.126,0.405c-0.011,0.061 -0.014,0.093 -0.017,0.133c-0.001,0.014 -0.001,0.018 -0.001,0.025Z"
      />
    </Svg>
  );
};

export const ScrollBottom = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="scroll-bottom"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Scroll Bottom</title>
      <Defs />
      <path
        d="M16,28c10.5,0 12,-1.5 12,-12c0,-10.5 -1.5,-12 -12,-12c-10.5,0 -12,1.5 -12,12c0,10.5 1.5,12 12,12Zm-4.482,-14.89c-0.353,-0.424 -0.984,-0.482 -1.408,-0.128c-0.424,0.353 -0.482,0.984 -0.128,1.408l0.001,0.001c0.216,0.26 0.433,0.524 0.652,0.79c1.299,1.581 2.658,3.235 4.312,4.41c0.311,0.219 0.663,0.409 1.053,0.409c0.39,0 0.742,-0.19 1.053,-0.409c1.679,-1.192 2.988,-2.79 4.285,-4.374c0.226,-0.277 0.452,-0.553 0.68,-0.826c0.354,-0.425 0.296,-1.056 -0.128,-1.409c-0.424,-0.354 -1.055,-0.296 -1.408,0.128c-0.212,0.254 -0.423,0.511 -0.634,0.768c-1.178,1.434 -2.365,2.878 -3.848,4.006c-1.457,-1.108 -2.673,-2.584 -3.848,-4.009c-0.212,-0.257 -0.423,-0.513 -0.634,-0.765Z"
      />
    </Svg>
  );
};

export const ScrollTop = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="scroll-top"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Scroll Top</title>
      <Defs />
      <g>
        <path
          d="M21.934,6.364c-1.478,-0.284 -3.354,-0.365 -5.934,-0.364c-2.58,-0.001 -4.456,0.08 -5.934,0.364c-1.402,0.264 -2.137,0.66 -2.589,1.113c-0.453,0.452 -0.849,1.187 -1.113,2.589c-0.284,1.478 -0.365,3.354 -0.364,5.934c-0.001,2.58 0.08,4.456 0.364,5.934c0.264,1.402 0.66,2.137 1.113,2.589c0.452,0.453 1.187,0.849 2.589,1.113c1.478,0.284 3.354,0.364 5.934,0.364c2.58,0 4.456,-0.08 5.934,-0.364c1.402,-0.264 2.137,-0.66 2.589,-1.113c0.453,-0.452 0.849,-1.187 1.113,-2.589c0.284,-1.478 0.364,-3.354 0.364,-5.934c0,-2.58 -0.08,-4.456 -0.364,-5.934c-0.264,-1.402 -0.66,-2.137 -1.113,-2.589c-0.452,-0.453 -1.187,-0.849 -2.589,-1.113Zm6.066,9.636c0,-10.5 -1.5,-12 -12,-12c-10.5,0 -12,1.5 -12,12c0,10.5 1.5,12 12,12c10.5,0 12,-1.5 12,-12Z"
        />
        <path
          d="M10.11,19.018c0.424,0.354 1.055,0.297 1.408,-0.128c1.391,-1.636 2.76,-3.464 4.482,-4.774c1.749,1.331 3.085,3.1 4.482,4.774c0.353,0.425 0.984,0.482 1.408,0.128c0.42,-0.349 0.476,-0.99 0.127,-1.409c-1.505,-1.799 -3.031,-3.827 -4.964,-5.2c-0.311,-0.219 -0.663,-0.409 -1.053,-0.409c-0.39,0 -0.742,0.19 -1.053,0.409c-1.914,1.359 -3.471,3.41 -4.965,5.201c-0.354,0.424 -0.296,1.055 0.128,1.408Z"
        />
      </g>
    </Svg>
  );
};

export const Send = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="send"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Send</title>
      <Defs />
      <path
        d="M16.044,15.012c-0.005,-0.104 -0.071,-0.205 -0.198,-0.232l-7.45,-1.579c-0.231,-0.049 -0.396,-0.253 -0.396,-0.489l0,-5.712c0,-0.73 0.698,-1.159 1.419,-0.908c4.295,1.497 12.081,5.408 15.616,8.025c0.34,0.252 0.515,0.573 0.52,0.895c-0.005,0.323 -0.18,0.644 -0.52,0.896c-3.535,2.617 -11.321,6.868 -15.616,8.365c-0.721,0.251 -1.419,-0.178 -1.419,-0.908l0,-6.052c0,-0.236 0.165,-0.44 0.396,-0.489l7.45,-1.579c0.127,-0.027 0.193,-0.129 0.198,-0.233Z"
      />
    </Svg>
  );
};

export const Settings = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="attachment"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Settings</title>
      <Defs />
      <path
        d="M9.752,9.489l2.302,0.705c0.552,-0.373 1.161,-0.669 1.81,-0.873l0.885,-2.239c0.397,-0.054 0.803,-0.082 1.216,-0.082c0.413,0 0.819,0.028 1.217,0.082l0.884,2.239c0.649,0.204 1.258,0.5 1.81,0.873l2.302,-0.705c0.588,0.56 1.1,1.2 1.519,1.901l-1.2,2.088c0.238,0.616 0.391,1.274 0.446,1.959l1.987,1.361c-0.073,0.828 -0.257,1.624 -0.539,2.372l-2.383,0.364c-0.341,0.583 -0.764,1.111 -1.253,1.57l0.176,2.403c-0.673,0.446 -1.408,0.804 -2.191,1.057l-1.77,-1.636c-0.328,0.048 -0.664,0.072 -1.005,0.072c-0.341,0 -0.676,-0.024 -1.005,-0.072l-1.77,1.636c-0.782,-0.253 -1.518,-0.611 -2.19,-1.057l0.175,-2.403c-0.489,-0.459 -0.912,-0.987 -1.253,-1.57l-2.383,-0.364c-0.281,-0.748 -0.466,-1.544 -0.539,-2.372l1.987,-1.361c0.055,-0.685 0.208,-1.343 0.446,-1.959l-1.199,-2.088c0.419,-0.701 0.93,-1.341 1.518,-1.901Zm6.213,10.511c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4Z"
      />
    </Svg>
  );
};

export const Share = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="share"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Share</title>
      <Defs />
      <g fillRule="nonzero">
        <path
          d="M15 19a1 1 0 0 0 2 0h-2zm1-16l.707-.707a.999.999 0 0 0-1.414 0L16 3zm-4.707 3.293a.999.999 0 1 0 1.414 1.414l-1.414-1.414zm8 1.414a.999.999 0 1 0 1.414-1.414l-1.414 1.414zM17 19V3h-2v16h2zM15.293 2.293l-4 4 1.414 1.414 4-4-1.414-1.414zm0 1.414l4 4 1.414-1.414-4-4-1.414 1.414z"
        />
        <path
          d="M12 11.196a.973.973 0 0 0-1.073-.977C5.282 10.857 4 13.095 4 19.5c0 8 2 9.5 12 9.5s12-1.5 12-9.5c0-6.405-1.282-8.643-6.927-9.281a.973.973 0 0 0-1.073.977v.002c0 .522.402.953.92 1.014.295.035.576.075.845.121 1.427.237 2.244.593 2.749.99.918.721 1.486 2.133 1.486 6.177 0 4.045-.568 5.457-1.486 6.178-.505.397-1.322.752-2.749.99-1.477.25-3.312.333-5.765.332-2.453.001-4.288-.082-5.765-.332-1.427-.238-2.244-.593-2.749-.99C6.568 24.957 6 23.545 6 19.5c0-4.044.568-5.456 1.486-6.177.505-.397 1.322-.753 2.749-.99.269-.046.55-.086.845-.121.518-.061.92-.492.92-1.014v-.002z"
        />
      </g>
    </Svg>
  );
};

export const Unlock = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="unlock"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Lock</title>
      <Defs />
      <path
        d="M16 5c1.479-.001 2.44.041 3.195.238.606.15.826.343.976.551.208.291.452.872.614 2.111.146 1.108.202 2.492.213 4.316C19.693 12.052 18.055 12 16 12c-9 0-10 1-10 8s1 8 10 8 10-1 10-8c0-4.444-.403-6.47-3-7.357C22.976 3.973 22.043 3 16 3c-5.168 0-6.599.712-6.919 6.342-.036.626.582 1.092 1.199.982a.957.957 0 0 0 .796-.88c.033-.571.078-1.082.14-1.544.162-1.239.405-1.82.613-2.111.15-.208.37-.401.976-.551C13.56 5.041 14.521 4.999 16 5zM8.251 16.222C8.046 17.134 7.999 18.295 8 20c-.001 1.705.046 2.866.251 3.778.173.795.41 1.111.64 1.299.283.231.836.499 2.045.679 1.248.19 2.85.244 5.064.244s3.816-.054 5.064-.244c1.209-.18 1.762-.448 2.044-.679.231-.188.468-.504.641-1.299.205-.912.251-2.073.251-3.778s-.046-2.866-.251-3.778c-.173-.795-.41-1.11-.641-1.299-.282-.231-.835-.499-2.044-.679C19.816 14.054 18.214 14 16 14s-3.816.054-5.064.244c-1.209.18-1.762.448-2.045.679-.23.189-.467.504-.64 1.299zM17 20.733a2 2 0 1 0-2 0V22a1 1 0 0 0 2 0v-1.267z"
      />
    </Svg>
  );
};

export const Write = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="write"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Write</title>
      <Defs />
      <path
        d="M26.957,4.886c-0.39,-0.391 -1.024,-0.391 -1.414,0l-10.896,10.896c-0.593,0.593 -1.07,1.291 -1.407,2.058l-0.003,0.006c-0.307,0.7 0.403,1.413 1.104,1.11c0.777,-0.337 1.484,-0.817 2.083,-1.416l10.886,-10.887c0.391,-0.39 0.391,-1.023 0,-1.414l-0.353,-0.353Zm-8.039,3.245c0.311,0.032 0.622,-0.071 0.843,-0.292l0.737,-0.737c0.274,-0.274 0.145,-0.736 -0.236,-0.804c-1.184,-0.21 -2.592,-0.298 -4.262,-0.298c-8,0 -10,2 -10,10c0,8 2,10 10,10c8,0 10,-2 10,-10c0,-1.507 -0.071,-2.801 -0.24,-3.909c-0.059,-0.39 -0.53,-0.529 -0.808,-0.251l-0.757,0.757c-0.215,0.215 -0.319,0.517 -0.293,0.821c0.064,0.734 0.098,1.587 0.098,2.582c0,4.015 -0.55,5.722 -1.414,6.586c-0.864,0.864 -2.572,1.414 -6.586,1.414c-4.014,0 -5.722,-0.55 -6.586,-1.414c-0.864,-0.864 -1.414,-2.571 -1.414,-6.586c0,-4.014 0.55,-5.721 1.414,-6.585c0.864,-0.864 2.572,-1.415 6.586,-1.415c1.151,0 2.112,0.046 2.918,0.131Z"
      />
    </Svg>
  );
};

export const WriteCancel = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="write-cancel"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Cancel</title>
      <Defs />
      <g>
        <path
          d="M18.828,13.171c-0.39,-0.39 -1.023,-0.39 -1.414,0l-1.414,1.415l-1.414,-1.415c-0.391,-0.39 -1.024,-0.39 -1.414,0c-0.391,0.391 -0.391,1.024 0,1.415l1.414,1.414l-1.414,1.414c-0.391,0.391 -0.391,1.024 0,1.414c0.39,0.391 1.023,0.391 1.414,0l1.414,-1.414l1.414,1.414c0.391,0.391 1.024,0.391 1.414,0c0.391,-0.39 0.391,-1.023 0,-1.414l-1.414,-1.414l1.414,-1.414c0.391,-0.391 0.391,-1.024 0,-1.415Z"
        />
        <path
          d="M22.586,22.586c0.864,-0.864 1.414,-2.572 1.414,-6.586c0,-4.014 -0.55,-5.722 -1.414,-6.586c-0.864,-0.864 -2.572,-1.414 -6.586,-1.414c-4.014,0 -5.722,0.55 -6.586,1.414c-0.864,0.864 -1.414,2.572 -1.414,6.586c0,4.014 0.55,5.722 1.414,6.586c0.864,0.864 2.572,1.414 6.586,1.414c4.014,0 5.722,-0.55 6.586,-1.414Zm-6.586,3.414c8,0 10,-2 10,-10c0,-8 -2,-10 -10,-10c-8,0 -10,2 -10,10c0,8 2,10 10,10Z"
        />
      </g>
    </Svg>
  );
};

export const Twitter = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="twitter"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Twitter</title>
      <Defs />
      <path
        d="M16,28c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm5.825,-13.901c0,3.669 -2.889,7.901 -8.172,7.901l0,0c-1.622,0 -3.132,-0.46 -4.403,-1.248c0.225,0.026 0.454,0.039 0.685,0.039c1.346,0 2.585,-0.444 3.568,-1.189c-1.258,-0.022 -2.318,-0.825 -2.684,-1.928c0.175,0.032 0.355,0.05 0.54,0.05c0.262,0 0.516,-0.034 0.758,-0.098c-1.315,-0.255 -2.305,-1.377 -2.305,-2.722c0,-0.013 0,-0.024 0.001,-0.036c0.387,0.208 0.829,0.333 1.301,0.348c-0.772,-0.498 -1.279,-1.348 -1.279,-2.312c0,-0.509 0.143,-0.985 0.389,-1.396c1.417,1.681 3.534,2.786 5.921,2.902c-0.049,-0.204 -0.074,-0.416 -0.074,-0.633c0,-1.533 1.286,-2.777 2.872,-2.777c0.826,0 1.573,0.338 2.097,0.877c0.654,-0.124 1.269,-0.356 1.824,-0.674c-0.215,0.649 -0.67,1.192 -1.263,1.536c0.581,-0.067 1.134,-0.216 1.649,-0.437c-0.384,0.557 -0.872,1.046 -1.433,1.438c0.006,0.119 0.008,0.239 0.008,0.359Z"
      />
    </Svg>
  );
};

export const Facebook = props => {
  return (
    <Svg
      color={props.color}
      stayActive={props.stayActive}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      id="facebook"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
    >
      <title id="title">Facebook</title>
      <Defs />
      <path
        d="M19.491,27.944c7.731,-0.319 8.509,-2.242 8.509,-11.944c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,10.985 0.997,11.997 11.956,12l0,-7.667l-2.956,0l0,-3.377l2.956,0l0,-2.491c0,-2.891 1.789,-4.465 4.403,-4.465c1.251,0 2.327,0.092 2.641,0.133l0,3.021l-1.813,0.001c-1.421,0 -1.696,0.666 -1.696,1.644l0,2.157l3.39,0l-0.442,3.377l-2.948,0l0,7.611Z"
      />
    </Svg>
  );
};
