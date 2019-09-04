import React from 'react';

class ContentParser extends React.Component {
  renderSegment(s) {
    if (s.type == 'img') {
      return (
        <div>
          <img src={s.content} />
        </div>
      );
    } else {
      return (
        <div>{s.content}</div>
      );
    }
  }

  render() {
    let array = [];
    let segment = this.props.content.split("[img]");
    var i;
    for (i = 0; i < segment.length; i++) {
      if (i == 0) {
        array = array.concat([{
          type: 'text',
          content: segment[i]
        }]);
      } else {
        let subSegment = segment[i].split("[/img]")
        if (subSegment.length == 1) { //no close bracket
          array = array.concat([{
            type: 'text',
            content: segment[i]
          }]);
        }else if (subSegment.length == 2) {
          array = array.concat([{
            type: 'img',
            content: subSegment[0]
          }]);
          array = array.concat([{
            type: 'text',
            content: subSegment[1]
          }]);
        }
      }
    }
    return (
      <div>
        {array.map((s) => (
          this.renderSegment(s)
        ))}
      </div>
    );
  }
}

export default ContentParser;
