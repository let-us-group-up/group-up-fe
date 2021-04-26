exports.format = function format(msgs) {
  const results = Object.entries(msgs).reduce((acc, [id, msg]) => {
    acc.push({
      term: id,
      definition: msg.defaultMessage,
      comment: msg.description,
    });

    return acc;
  }, []);

  return results;
};

exports.compile = function compile(msgs) {
  const results = msgs.reduce((acc, { term, definition }) => {
    acc[term] = definition;
    return acc;
  }, {});

  return results;
};
