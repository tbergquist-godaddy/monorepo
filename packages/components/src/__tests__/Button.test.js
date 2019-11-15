// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Button from '../Button';

it('renders', () => {
  expect(create(<Button>test</Button>)).toMatchInlineSnapshot(`
    .c0 {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: auto;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      max-width: 100%;
      height: 44px;
      background: #0172CB;
      color: #FFFFFF !important;
      border: 0;
      border-radius: 3px;
      padding: 0 16px;
      font-family: "Roboto",-apple-system,".SFNSText-Regular","San Francisco","Segoe UI","Helvetica Neue","Lucida Grande",sans-serif;
      font-weight: 700!important;
      font-size: 14px;
      line-height: 1.4;
      cursor: pointer;
      -webkit-transition: all 0.15s ease-in-out !important;
      transition: all 0.15s ease-in-out !important;
      outline: 0;
    }

    .c0:hover {
      background: #0161AC;
      color: #FFFFFF!important;
    }

    .c0:hover .c4 {
      color: #FFFFFF;
    }

    .c0:active {
      background: #01508E;
      color: #FFFFFF!important;
      box-shadow: inset 0 0 6px 3px rgba(37,42,49,0.15);
    }

    .c0:active .c4 {
      color: #FFFFFF;
    }

    .c0:focus {
      box-shadow: 0 0 0 3px rgba(1,114,203,0.5);
    }

    .c0:focus:active {
      box-shadow: inset 0 0 6px 3px rgba(37,42,49,0.15);
    }

    .c0:focus:not(:focus-visible) {
      box-shadow: none;
      background: #0172CB;
    }

    .c0:-moz-focusring,
    .c0:focus-visible {
      box-shadow: 0 0 0 3px rgba(1,114,203,0.5);
    }

    .c0:-moz-focusring:active,
    .c0:focus-visible:active {
      box-shadow: inset 0 0 6px 3px rgba(37,42,49,0.15);
    }

    .c0 .c3 {
      width: 24px;
      height: 24px;
    }

    .c1 {
      height: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c2 {
      display: inline-block;
    }

    @media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
      .c1 {
        min-width: 100%;
        max-width: 1px;
      }
    }

    <button
      className="c0"
      size="normal"
      type="button"
    >
      <div
        className="c1"
      >
        <div
          className="c2"
        >
          test
        </div>
      </div>
    </button>
  `);
});
