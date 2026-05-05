const PostPreview = createClass({
  render: function () {
    const entry = this.props.entry;

    const title = entry.getIn(["data", "title"]);
    const date = entry.getIn(["data", "date"]);
    const content = this.props.widgetFor("content");

    return h("div", { className: "post" }, [
      h("header", { className: "post-header" }, [
        h("h1", {}, title),
        h("p", { className: "meta" }, date),
      ]),

      h("div", { className: "post-content" }, content),
    ]);
  },
});

CMS.registerPreviewTemplate("posts", PostPreview);