"use strict";

const AudioNode = require("./AudioNode");
const DynamicsCompressorNodeDSP = require("./dsp/DynamicsCompressorNode");
const { EXPLICIT } = require("../constants/ChannelCountMode");
const { CONTROL_RATE } = require("../constants/AudioParamRate");

class DynamicsCompressorNode extends AudioNode {
  /**
   * @param {AudioContext} context
   */
  constructor(context) {
    super(context, {
      inputs: [ 1 ],
      outputs: [ 2 ],
      channelCount: 2,
      channelCountMode: EXPLICIT
    });
    this._threshold = this.addParam(CONTROL_RATE, -24);
    this._knee = this.addParam(CONTROL_RATE, 30);
    this._ratio = this.addParam(CONTROL_RATE, 12);
    this._attack = this.addParam(CONTROL_RATE, 0.003);
    this._release = this.addParam(CONTROL_RATE, 0.250);
  }

  /**
   * @param {AudioParam}
   */
  getThreshold() {
    return this._threshold;
  }

  /**
   * @param {AudioParam}
   */
  getKnee() {
    return this._knee;
  }

  /**
   * @param {AudioParam}
   */
  getRatio() {
    return this._ratio;
  }

  /**
   * @return {number}
   */
  /* istanbul ignore next */
  getReduction() {
    throw new TypeError("NOT YET IMPLEMENTED");
  }

  /**
   * @param {AudioParam}
   */
  getAttack() {
    return this._attack;
  }

  /**
   * @param {AudioParam}
   */
  getRelease() {
    return this._release;
  }
}

Object.assign(DynamicsCompressorNode.prototype, DynamicsCompressorNodeDSP);

module.exports = DynamicsCompressorNode;
