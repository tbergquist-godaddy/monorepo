#!/bin/bash

cp ../graphql/schema.graphql ./schema.graphql
yarn relay-compiler --language typescript