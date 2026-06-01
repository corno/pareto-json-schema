
import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/to_be_generated/unmarshall_json"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as t_json_from_list_of_characters from "pareto-json/dist/implementation/manual/transformers/json_from_list_of_characters/fountain_pen"
import * as t_unmarshalled_from_json from "pareto-json/dist/implementation/manual/transformers/unmarshalled_from_json/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const Error: _pi.Transformer<d_in.Error, d_out.Phrase> = ($) => _p.decide.state($, ($): d_out.Phrase => {
    switch ($[0]) {
        case 'deserialize': return _p.ss($, ($) => t_json_from_list_of_characters.Error($))
        case 'unmarshall': return _p.ss($, ($) => t_unmarshalled_from_json.Error($))
        default: return _p.au($[0])
    }
})