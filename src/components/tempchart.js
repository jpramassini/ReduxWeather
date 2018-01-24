import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(9/5 * (_.sum(data)/data.length - 273) + 32)
}

export default (props) => {
  return(
    <div>
      <Sparklines svgHeight={90} height={90} svgWidth={185} width={180} data={props.data}>
        <SparklinesLine color={props.color} style={{ strokeWidth: props.strokeWidth}} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div> Avg: {average(props.data)}{props.units}</div>
    </div>
  )
}
