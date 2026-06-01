
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/signatures/transformers/fountain_pen"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Array: t_signatures.Array = ($) => v_serialize.Document(
    v_marshall.Array(
        $,
    ),
)

export const Boolean: t_signatures.Boolean = ($) => v_serialize.Document(
    v_marshall.Boolean(
        $,
    ),
)

export const Null: t_signatures.Null = ($) => v_serialize.Document(
    v_marshall.Null(
        $,
    ),
)

export const Number: t_signatures.Number = ($) => v_serialize.Document(
    v_marshall.Number(
        $,
    ),
)

export const Object: t_signatures.Object = ($) => v_serialize.Document(
    v_marshall.Object(
        $,
    ),
)

export const String: t_signatures.String = ($) => v_serialize.Document(
    v_marshall.String(
        $,
    ),
)

export const Value: t_signatures.Value = ($) => v_serialize.Document(
    v_marshall.Value(
        $,
    ),
)

export const Schema: t_signatures.Schema = ($) => v_serialize.Document(
    v_marshall.Schema(
        $,
    ),
)
