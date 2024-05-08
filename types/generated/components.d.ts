import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'ButtonPrimary';
    icon: 'play';
    description: '';
  };
  attributes: {
    textButton: Attribute.String;
    isActive: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
    }
  }
}
