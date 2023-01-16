#!/usr/bin/env bash

folder=$(dirname $0)

cd "${folder}" || exit

npx jest --watch

# 需要配合git使用, 感觉没什么用
