import React from "react";
import { storiesOf } from "@storybook/react";
import { number, boolean, select, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import Typography from "../Typography";
import { _VALID_COLORS, _VALID_SIZES, _VALID_TYPES } from "../_constants";

import {
  H1,
  H2,
  H3,
  Text,
  Body,
  Bold,
  Caption,
  Disabled,
  Sub1,
  Sub2
} from "../index";
import infoOptions from "./infoOptions";

const storybook = storiesOf("Basics|Typography", module);

function renderStory(component) {
  return (
    <KnobbedThemeProvider
      supportedThemes={[THEMES.WEB_LIGHT, THEMES.LIGHT_GRAY, THEMES.DARK_BLUE]}
    >
      {component}
    </KnobbedThemeProvider>
  );
}

storybook.add(
  "base component",
  withInfo(infoOptions)(() => {
    const component = (
      <Typography
        bold={boolean("Bold", false)}
        color={select("Color", _VALID_COLORS, "hig-cool-gray-70")}
        disabled={boolean("Disabled", false)}
        opacity={number("Opacity", 1.0, {
          min: 0.0,
          max: 1.0,
          step: 0.1
        })}
        size={select("Size", _VALID_SIZES, "medium")}
        type={select("Type", _VALID_TYPES, "text")}
        text={text("Text", "This should render nicely.")}
      />
    );
    return renderStory(component);
  })
);

[H1, H2, H3, Text, Body, Bold, Caption, Disabled, Sub1, Sub2].forEach(
  Component => {
    const { name } = Component;

    storybook.add(
      name,
      withInfo(infoOptions)(() => {
        const component = (
          <Component
            bold={boolean("Bold", false)}
            color={select("Color", _VALID_COLORS, "hig-cool-gray-70")}
            disabled={boolean("Disabled", false)}
            opacity={number("Opacity", 1.0, {
              min: 0.0,
              max: 1.0,
              step: 0.1
            })}
            size={select("Size", _VALID_SIZES, "medium")}
          >
            {text("Children", `${name} example text`)}
          </Component>
        );
        return renderStory(component);
      })
    );
  }
);
