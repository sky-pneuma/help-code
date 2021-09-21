import { code } from './partials/functionsCode';

const RenderFunctionsCode = ({ id }) => {
    return <>
        <h2 className="mb30">{id}</h2>
        {code[id]}
    </>
}

export default RenderFunctionsCode;