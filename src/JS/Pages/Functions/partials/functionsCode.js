
export const code = {
    handleObjectChange: <div className="dfc">
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
    </div>,
    getParams: <div>getParams</div>
}