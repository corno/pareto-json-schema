import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_in from "pareto-json/dist/interface/generated/liana/schemas/json_with_guaranteed_unique_keys/data"
import * as d_out from "../../../../interface/to_be_generated/json_schema"

export type My_Error =
| ['unexpected schema type', null]

export const Schema: _pi.Refiner<
    d_out.Schema,
    My_Error,
    d_in.Value
> = ($, abort) => {
    return _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => ['boolean', null])
            // case 'object': return _p.ss($, ($) => ['object', {
            //     'const': 
            // }])
            default: return abort(['unexpected schema type', null])
        }
    })
}