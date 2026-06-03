import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_cc from 'pareto-core/dist/_p_change_context'

import * as d_out from "../../../../interface/generated/liana/schemas/schema_for_legacy_json/data"
import * as d_in from "../../../../interface/to_be_generated/json_schema"


export namespace d_function {
    export type Error = null
}

export const Document: _pi.Refiner<
    d_out.Document,
    d_function.Error,
    d_in.Schema
    > = ($, abort) => ({
        'imports': _p.dictionary.literal({}),
        'definitions': _p.dictionary.literal({}),
        'root': ""
    })