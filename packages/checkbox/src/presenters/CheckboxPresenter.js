import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { generateId } from "@hig/utils";
import CheckPresenter from "./CheckPresenter";

import "./CheckboxPresenter.scss";

export default class CheckboxPresenter extends Component {
  static propTypes = {
    /**
     * Checks the checkbox
     */
    checked: PropTypes.bool,
    /**
     * Prevents user actions on the checkbox
     */
    disabled: PropTypes.bool,
    /**
     * Sets indeterminate state for checkbox
     */
    indeterminate: PropTypes.bool,
    /**
     * The name of the checkbox as submitted with a form
     */
    name: PropTypes.string,
    /**
     * Called when user moves focus from the field
     */
    onBlur: PropTypes.func,
    /**
     * Called when the checkbox is changed
     */
    onChange: PropTypes.func,
    /**
     * Called when user clicks on the checkbox
     */
    onClick: PropTypes.func,
    /**
     * Called when user puts focus on the field
     */
    onFocus: PropTypes.func,
    /**
     * Marks the field as required, text shown to explain requirement
     */
    required: PropTypes.string,
    /**
     * Value submitted with a form if checked
     */
    value: PropTypes.string
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
    name: "checkbox",
    value: "value"
  };

  setIndeterminate = input => {
    if (input) {
      // Workaround for https://github.com/facebook/react/issues/1798
      // eslint-disable-next-line no-param-reassign
      input.indeterminate = this.props.indeterminate;
    }
  };

  render() {
    const {
      checked,
      disabled,
      indeterminate,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      required,
      value
    } = this.props;

    const wrapperClasses = cx([
      "hig__checkbox",
      "hig__checkbox--checkbox",
      {
        "hig__checkbox--required": required,
        "hig__checkbox--checked": checked
      }
    ]);

    return (
      <div className={wrapperClasses}>
        <input
          checked={checked}
          className="hig__checkbox__input"
          disabled={disabled}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
          ref={this.setIndeterminate}
          type="checkbox"
          value={value}
        />
        <CheckPresenter
          checked={checked}
          disabled={disabled}
          indeterminate={indeterminate}
        />

      </div>
    );
  }
}
