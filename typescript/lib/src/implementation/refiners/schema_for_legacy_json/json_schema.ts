import * as p_ from 'pareto-core/implementation/refiner'
import type * as p_i from 'pareto-core/interface/refiner'

//schemas
import type * as s_in from "../../../interface/schemas/json_schema.js"
import type * as s_out from "../../../interface/schemas/schema_for_legacy_json.js"


namespace s_error {
    export type Error = null
}

export const Document: p_i.Refiner<
    s_out.Document,
    s_error.Error,
    s_in.Schema
    > = ($, abort) => ({
        'imports': p_.literal.dictionary({}),
        'definitions': p_.literal.dictionary({}),
        'root': ""
    })