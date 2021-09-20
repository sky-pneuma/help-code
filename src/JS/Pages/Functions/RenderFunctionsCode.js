import { code } from './partials/functionsCode';

const RenderFunctionsCode = ({ id }) => {
    return <div>
        <h2 className="mb30">{id}</h2>
        {code[id]}
    </div>
}

export default RenderFunctionsCode;