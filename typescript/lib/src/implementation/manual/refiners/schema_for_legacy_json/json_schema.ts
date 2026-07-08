import * as p_ from 'pareto-core/implementation/refiner'
import type * as p_i from 'pareto-core/interface/refiner'


import type * as d_out from "../../../../interface/generated/liana/schemas/schema_for_legacy_json/data.js"
import type * as d_in from "../../../../interface/data/json_schema.js"


export namespace d_function {
    export type Error = null
}

export const Document: p_i.Refiner<
    d_out.Document,
    d_function.Error,
    d_in.Schema
    > = ($, abort) => ({
        'imports': p_.literal.dictionary({}),
        'definitions': p_.literal.dictionary({}),
        'root': ""
    })