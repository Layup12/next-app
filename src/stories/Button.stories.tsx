import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";

export default {
    title: "Example/Button",
    component: Button,
    args: {
        children: "Кнопка",
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Заблокирован",
    disabled: true,
};
