/**
 * Note View - View
 */
var React = require("react");
var markdown = require("markdown").markdown;

module.exports = React.createClass({
  render: function () {
    var html = markdown.toHTML(this.props.note.get("text"));

    return (
      <div>
        <div className="well well-small">
          <h2 data-qa-name="note-view-title">
            {this.props.note.get("title")}
          </h2>
        </div>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    );
  }
});
