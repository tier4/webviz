// @flow

//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

import * as React from "react";

import type { BaseShape } from "../types";
import fromGeometry from "../utils/fromGeometry";
import { createInstancedGetChildrenForHitmap } from "../utils/getChildrenForHitmapDefaults";
import Command, { type CommonCommandProps } from "./Command";
import { createCylinderGeometry } from "./Cylinders";

const { points, sideFaces, endCapFaces } = createCylinderGeometry(30, true);

const cones = fromGeometry(points, sideFaces.concat(endCapFaces));

export default function Cones(props: { ...CommonCommandProps, children: BaseShape[] }) {
  return <Command getChildrenForHitmap={createInstancedGetChildrenForHitmap(1)} {...props} reglCommand={cones} />;
}
