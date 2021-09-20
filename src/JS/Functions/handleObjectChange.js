export const handleObjectChange = (updateObject, updateFunction) =>
    (data, prop = '', isNumber) => {
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
    };


