import { TEditorConfiguration } from '../../documents/editor/core';

const EMPTY_EMAIL_MESSAGE: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#F5F5F5',
      canvasColor: '#FFFFFF',
      textColor: '#262626',
      fontFamily: 'MODERN_SANS',
      childrenIds: ['welcome-text-block'],
    },
  },
  'welcome-text-block': {
    type: 'Text',
    data: {
      style: {
        fontWeight: 'normal',
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Welcome to EmailBuilder.js! Click on a sample template from the left sidebar to get started, or add blocks to create your own email template.',
      },
    },
  },
};

export default EMPTY_EMAIL_MESSAGE;
