// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Navbar from '../Navbar';

it('renders', () => {
  expect(
    create(
      <Navbar
        brand="Brand"
        headerLeft={<div>left</div>}
        headerRight={<div>right</div>}
      />,
    ),
  ).toMatchInlineSnapshot(`
    <nav
      className="sc-bdVaJa bxROHK"
    >
      <div
        className="sc-EHOje ZgWUm"
        style={
          Object {
            "boxSizing": "border-box",
            "marginLeft": "auto",
            "marginRight": "auto",
            "maxWidth": "960px",
            "paddingLeft": "15px",
            "paddingRight": "15px",
            "position": "relative",
          }
        }
      >
        <div
          className="sc-bxivhb hcxIPy"
        >
          <div
            className="sc-ifAKCX cNgdKV"
          >
            <div
              className="sc-htoDjs kOiEgj"
            >
              <a
                className="sc-bwzfXH sc-htpNat iprUmX"
                href="/"
                onClick={[Function]}
              >
                Brand
              </a>
              <div
                className="sc-gzVnrw jdfCU"
              >
                <div>
                  left
                </div>
              </div>
            </div>
            <div
              className="sc-gzVnrw jdfCU"
            >
              <div>
                right
              </div>
            </div>
            <button
              className="sc-bZQynM bPyPMW Button__StyledButton-sc-1brqp3f-1 haWQQK"
              onClick={[Function]}
              size="small"
              type="button"
            >
              <div
                className="Button__StyledButtonContent-sc-1brqp3f-2 bmuxXg"
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
            </button>
          </div>
        </div>
        <span
          style={
            Object {
              "clear": "both",
              "display": "table",
            }
          }
        />
      </div>
    </nav>
  `);
});
