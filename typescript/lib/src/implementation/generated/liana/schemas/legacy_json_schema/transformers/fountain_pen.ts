
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/legacy_json_schema/signatures/transformers/fountain_pen"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Array_Definition: t_signatures.Array_Definition = ($) => v_serialize.Document(
    v_marshall.Array_Definition(
        $,
    ),
)

export const Boolean_Definition: t_signatures.Boolean_Definition = ($) => v_serialize.Document(
    v_marshall.Boolean_Definition(
        $,
    ),
)

export const Null_Definition: t_signatures.Null_Definition = ($) => v_serialize.Document(
    v_marshall.Null_Definition(
        $,
    ),
)

export const Number_Definition: t_signatures.Number_Definition = ($) => v_serialize.Document(
    v_marshall.Number_Definition(
        $,
    ),
)

export const Object_Definition: t_signatures.Object_Definition = ($) => v_serialize.Document(
    v_marshall.Object_Definition(
        $,
    ),
)

export const String_Definition: t_signatures.String_Definition = ($) => v_serialize.Document(
    v_marshall.String_Definition(
        $,
    ),
)

export const Definition: t_signatures.Definition = ($) => v_serialize.Document(
    v_marshall.Definition(
        $,
    ),
)

export const Schema: t_signatures.Schema = ($) => v_serialize.Document(
    v_marshall.Schema(
        $,
    ),
)

export const Error: t_signatures.Error = ($) => v_serialize.Document(
    v_marshall.Error(
        $,
    ),
)

export const Value_Type: t_signatures.Value_Type = ($) => v_serialize.Document(
    v_marshall.Value_Type(
        $,
    ),
)
