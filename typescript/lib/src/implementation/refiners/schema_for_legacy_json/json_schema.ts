import * as p_ from 'pareto-core/implementation/refiner'
import type * as p_i from 'pareto-core/interface/refiner'


import type * as s_out from "../../../interface/schemas/schema_for_legacy_json.js"
import type * as s_in from "../../../interface/schemas/json_schema.js"


namespace s_function {
    export type Error = null
}

export const Document: p_i.Refiner<
    s_out.Document,
    s_function.Error,
    s_in.Schema
    > = ($, abort) => ({
        'imports': p_.literal.dictionary({}),
        'definitions': p_.literal.dictionary({}),
        'root': ""
    })