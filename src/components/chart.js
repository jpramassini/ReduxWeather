import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return(
    <div>
      <Sparklines svgHeight={100} height={100} svgWidth={180} width={180} data={props.data}>
        <SparklinesLine color={props.color} style={{ strokeWidth: props.strokeWidth}} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div> Avg: {average(props.data)}{props.units}</div>
    </div>
  );
}
