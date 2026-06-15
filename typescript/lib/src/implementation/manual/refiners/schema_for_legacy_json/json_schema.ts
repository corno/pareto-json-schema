import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_i from 'pareto-core/dist/interface/refiner'


import * as d_out from "../../../../interface/generated/liana/schemas/schema_for_legacy_json/data"
import * as d_in from "../../../../interface/to_be_generated/json_schema"


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