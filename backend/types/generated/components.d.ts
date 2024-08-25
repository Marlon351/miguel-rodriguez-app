import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsProject extends Schema.Component {
  collectionName: 'components_components_projects';
  info: {
    displayName: 'Project';
    icon: 'archive';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    BriefDescription: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ProjectPage: Attribute.Component<'components.project-page'>;
  };
}

export interface ComponentsProjectPage extends Schema.Component {
  collectionName: 'components_components_project_pages';
  info: {
    displayName: 'ProjectPage';
    icon: 'archive';
    description: '';
  };
  attributes: {
    ProjectInfoSegment: Attribute.Component<
      'components.project-info-segment',
      true
    >;
  };
}

export interface ComponentsProjectInfoSegment extends Schema.Component {
  collectionName: 'components_components_project_info_segments';
  info: {
    displayName: 'Project Info Segment';
    icon: 'archive';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
  };
  attributes: {
    URL: Attribute.Text;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsAboutSegment extends Schema.Component {
  collectionName: 'components_components_about_segments';
  info: {
    displayName: 'About Segment';
    icon: 'feather';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.project': ComponentsProject;
      'components.project-page': ComponentsProjectPage;
      'components.project-info-segment': ComponentsProjectInfoSegment;
      'components.link': ComponentsLink;
      'components.about-segment': ComponentsAboutSegment;
    }
  }
}
