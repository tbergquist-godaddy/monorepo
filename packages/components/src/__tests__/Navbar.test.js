// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Navbar from '../Navbar';

it('renders', () => {
  expect(
    create(<Navbar brand="Brand" headerLeft={<div>left</div>} headerRight={<div>right</div>} />),
  ).toMatchInlineSnapshot(`
    .c7 {
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
      height: 32px;
      background: #0172CB;
      color: #FFFFFF !important;
      border: 0;
      border-radius: 3px;
      padding: 0 12px;
      font-family: "Roboto",-apple-system,".SFNSText-Regular","San Francisco","Segoe UI","Helvetica Neue","Lucida Grande",sans-serif;
      font-weight: 700!important;
      font-size: 12px;
      line-height: 1.4;
      cursor: pointer;
      -webkit-transition: all 0.15s ease-in-out !important;
      transition: all 0.15s ease-in-out !important;
      outline: 0;
    }

    .c7:hover {
      background: #0161AC;
      color: #FFFFFF!important;
    }

    .c7:hover .Button__IconContainer-sc-1brqp3f-0 {
      color: #FFFFFF;
    }

    .c7:active {
      background: #01508E;
      color: #FFFFFF!important;
      box-shadow: inset 0 0 6px 3px rgba(37,42,49,0.15);
    }

    .c7:active .Button__IconContainer-sc-1brqp3f-0 {
      color: #FFFFFF;
    }

    .c7:focus {
      box-shadow: 0 0 0 3px rgba(1,114,203,0.5);
    }

    .c7:focus:active {
      box-shadow: inset 0 0 6px 3px rgba(37,42,49,0.15);
    }

    .c7:focus:not(:focus-visible) {
      box-shadow: none;
      background: #0172CB;
    }

    .c7:-moz-focusring,
    .c7:focus-visible {
      box-shadow: 0 0 0 3px rgba(1,114,203,0.5);
    }

    .c7:-moz-focusring:active,
    .c7:focus-visible:active {
      box-shadow: inset 0 0 6px 3px rgba(37,42,49,0.15);
    }

    .c7 .Loading__StyledSpinner-sc-1psg3na-2 {
      width: 16px;
      height: 16px;
    }

    .c9 {
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

    .c10 {
      display: inline-block;
    }

    .c0 {
      background-color: #222;
      border-color: #090909;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      min-height: 50px;
      z-index: 900;
    }

    .c5 {
      color: #e2e2e2;
      -webkit-text-decoration: none;
      text-decoration: none;
      margin-left: 0;
      font-size: 18px;
    }

    .c5:hover {
      color: #fff;
    }

    .c2 {
      padding-top: 15px;
      padding-bottom: 15px;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    .c1 {
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c8 {
      max-height: 20px;
      background-color: #222;
    }

    .c8:hover {
      background-color: #222;
    }

    .c6 {
      display: none;
    }

    .c4 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    @media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
      .c9 {
        min-width: 100%;
        max-width: 1px;
      }
    }

    @media only screen and (min-width:768px) {

    }

    @media (min-width:768px) {
      .c1 {
        width: 750px;
      }
    }

    @media (min-width:992px) {
      .c1 {
        width: 970px;
      }
    }

    @media (min-width:1200px) {
      .c1 {
        width: 1170px;
      }
    }

    @media only screen and (min-width:768px) {
      .c8 {
        display: none;
      }
    }

    @media only screen and (min-width:768px) {
      .c6 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }
    }

    <nav
      className="c0"
    >
      <div
        className="sc-AxjAm c1"
      >
        <div
          className="c2"
        >
          <div
            className="c3"
          >
            <div
              className="c4"
            >
              <a
                className="sc-AxiKw c5"
                href="/"
                onClick={[Function]}
                onMouseEnter={[Function]}
              >
                Brand
              </a>
              <div
                className="c6"
              >
                <div>
                  left
                </div>
              </div>
            </div>
            <div
              className="c6"
            >
              <div>
                right
              </div>
            </div>
            <button
              className="c7 c8"
              onClick={[Function]}
              size="small"
              type="button"
            >
              <div
                className="c9"
              >
                <div
                  className="c10"
                >
                  <svg
                    fill="currentColor"
                    height="1em"
                    stroke="currentColor"
                    strokeWidth="0"
                    style={
                      Object {
                        "color": undefined,
                      }
                    }
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `);
});
