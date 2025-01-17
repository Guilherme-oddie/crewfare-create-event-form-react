
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Upload, { UploadProps } from "../../components/atoms/Upload/Upload";

export default {
  title: "Atom/Upload",
  component: Upload,
} as Meta<UploadProps>;

const Template: StoryFn<UploadProps> = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
  onFileUpload: (file: File) => alert(`File uploaded: ${file.name}`),
  overlayText: "Sample Text",
};
