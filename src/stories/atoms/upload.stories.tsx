import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Upload from "../../components/atoms/Upload/Upload";

export default {
  title: "Atom/Upload",
  component: Upload,
} as Meta;

const Template: StoryFn = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
  overlayText: "Sample Text",
  onFileUpload: (file: File) => {
    const fileDetails = {
      name: file.name,
      type: file.type,
      size: file.size,
    };
    alert(`File uploaded: ${JSON.stringify(fileDetails, null, 2)}`);
  },
};
