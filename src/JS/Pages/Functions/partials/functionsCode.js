
export const code = {
  /* handleObjectChange: <div className="dfc">
      <h4>in component:</h4>
      <div>const [data, setData] = useState(items);</div>
      <br />
      <div>const onChange = handleObjectChange(setData, () => setData([...data]));</div>
      <br />
      <div>const handleArrayChange = (e, index, prop) => {"{"}</div>
      <div>data[index][prop] = e;</div>
      <div>onChange(data);</div>
      {"}"}
      <br />
      <br />
      <div className="mt15">
          <h4>function:</h4> 
          export const handleObjectChange = (updateObject, updateFunction) =>
          (data, prop = '', isNumber) => {"{"}
          <br />
          let value;
          <br />
          if (data?.target) {"{"}
          <br />
          value = data.target.type === 'checkbox' ? data.target.checked : data.target.value;<br />
          {'}'} else value = data;<br />
          <br />
          value = isNumber ? +value : value;<br />
          <br />
          const props = prop.split('.');<br />
          const currentObject = props.reduce((res, chapter, index) => {"{"} <br />
          if (props.length !== index + 1) res = res[chapter];<br />
          return res;<br />
          {"}"}, updateObject);<br />
          <br />
          currentObject[props.pop()] = value;<br />
          updateFunction();<br />
          {"}"};
      </div>
  </div>, */
  handleObjectChange: <pre>
    <code>{`IN COMPONENT:

  const [data, setData] = useState(items);

  const onChange = handleObjectChange(setData, () => setData([...data]));

  const handleArrayChange = (e, index, prop) => { //onClick
      data[index][prop] = e;
      onChange(data);
  };


FUNCTION:

  export const handleObjectChange = (updateObject, updateFunction) => (data, prop = '', isNumber) => {
    let value;
    if (data?.target) {
      value = data.target.type === 'checkbox' ? data.target.checked : data.target.value;
    } else value = data;
		
    value = isNumber ? +value : value;
		
    const props = prop.split('.');
    const currentObject = props.reduce((res, chapter, index) => {
      if (props.length !== index + 1) res = res[chapter];
      return res;
    }, updateObject);
		
    currentObject[props.pop()] = value;
    updateFunction();
  };`
    }
    </code>
  </pre>,
  compare: <pre><code>{`Compare 2 arrays or objects.

IN COMPONENT:
compare(arr, arr2);

FUNCTION:

export const compare = (a, b, keys = []) => {
  if ((Array.isArray(a), Array.isArray(b))) return JSON.stringify(a?.sort?.()) === JSON.stringify(b?.sort?.());
  else if (Array.isArray(a) || Array.isArray(b)) throw new Error('Different types detected!');
  return JSON.stringify(Object.entries(omitKeys(a, keys)).sort?.()) === JSON.stringify(Object.entries(omitKeys(b, keys)).sort?.());
};`}</code>
  </pre>,
  getQueryParams: <pre>{`
  Add query to url.
  IN COMPONENT:
  () => {
    restApi.send({
      path: definePathWithQuery(scheme, form),
      method: 'GET',
    }).then((res) => {
      if (res?.ok) {
        try {
          res.text().then((item) => {
            PSStore.set('updating', false);
            if (item) GeneralStore.set(JSON.parse(item).rows, scheme, 'itemsList', 'rows');
          });
        } catch {
          return { ok: true };
        }
      } else toast.error('Something wrong, try again...');
    });
  },
  
  FUNCTION:

  export const getQueryParams = params => Object.entries(params)
    .map(([key, value]) => value && \`filter[\${key}]=\${value}\`)
    .filter(el => el)
    .join('&')
    .replace(/^(?=.)/, '?');
		
  export const definePathWithQuery = (scheme, data) => { //scheme-string, data-array
    let queryObj = data.reduce((acc, el) => ({ ...acc, [el.key === 'state' ? 'address_state' : el.key]: el.item.value || '' }), {});
    if (scheme === "consumers") return \`customers\${getQueryParams(queryObj)}\`;
    else return \`\${scheme}\${getQueryParams(queryObj)}\`
  }
	`}</pre>
}