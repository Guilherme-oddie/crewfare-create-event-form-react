import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Grid from "../../components/molecules/Grid/Grid";

export default {
  title: "Molecules/Grid",
  component: Grid,
  argTypes: {
    item: { control: "boolean", description: "Define if the component is a grid item" },
    gap: { control: "number", description: "Spacing between grid items (for container)" },
    size: { control: "number", description: "Size of the grid item (1-12)" },
    total: { control: "number", description: "Total rows/columns in the grid container" },
    isRow: { control: "boolean", description: "Whether the grid container uses rows or columns" },
    className: { control: "text", description: "Additional CSS class for styling" },
    style: { control: "object", description: "Inline styles for custom styling" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Grid {...args}>
    {args.item ? (
      <div style={{ background: "#1d1d1f", padding: "16px", color: "#FFFFFF", fontFamily: "Poppins" }}>Grid Item</div>
    ) : (
      <>
        <Grid
          item
          size={4}
          style={{ background: "#1d1d1f", padding: "16px", color: "#FFFFFF", fontFamily: "Poppins" }}
        >
          Item 1
        </Grid>
        <Grid
          item
          size={4}
          style={{ background: "black", padding: "16px", color: "#FFFFFF", fontFamily: "Poppins" }}
        >
          Item 2
        </Grid>
        <Grid
          item
          size={4}
          style={{ background: "gray", padding: "16px", color: "#FFFFFF", fontFamily: "Poppins" }}
        >
          Item 3
        </Grid>
      </>
    )}
  </Grid>
);

export const Container = Template.bind({});
Container.args = {
  item: false,
  gap: 16,
  total: 12,
  isRow: false,
};

export const Item = Template.bind({});
Item.args = {
  item: true,
  size: 4,
};
