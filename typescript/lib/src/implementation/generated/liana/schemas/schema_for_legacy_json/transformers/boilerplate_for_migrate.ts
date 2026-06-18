
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/data"

export const Document: t_signatures.Document = ($) => ({
    'imports': p_change_context(
        $['imports'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => Document(
                $,
            ),
        ),
    ),
    'definitions': p_change_context(
        $['definitions'],
        ($) => Definitions(
            $,
        ),
    ),
    'root': p_change_context(
        $['root'],
        ($) => $,
    ),
})

export const Definitions: t_signatures.Definitions = ($) => p_.from.dictionary(
    $,
).map(
    ($, id) => Schema(
        $,
    ),
)

export const Schema: t_signatures.Schema = ($) => p_decide_state(
    $,
    ($): t_out.Schema => {
        switch ($[0]) {
            case 'any':
                return p_.ss(
                    $,
                    ($) => ['any', null],
                )
            case 'const':
                return p_.ss(
                    $,
                    ($) => ['const', Const_Value(
                        $,
                    )],
                )
            case 'one of':
                return p_.ss(
                    $,
                    ($) => ['one of', p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => Schema(
                            $,
                        ),
                    )],
                )
            case 'reference':
                return p_.ss(
                    $,
                    ($) => ['reference', {
                        'document': p_change_context(
                            $['document'],
                            ($) => p_.from.optional(
                                $,
                            ).map(
                                ($) => $,
                            ),
                        ),
                        'definition': p_change_context(
                            $['definition'],
                            ($) => $,
                        ),
                    }],
                )
            case 'type constraint':
                return p_.ss(
                    $,
                    ($) => ['type constraint', p_decide_state(
                        $,
                        ($): t_out.Schema.type_constraint => {
                            switch ($[0]) {
                                case 'single':
                                    return p_.ss(
                                        $,
                                        ($) => ['single', p_decide_state(
                                            $,
                                            ($): t_out.Schema.type_constraint.single => {
                                                switch ($[0]) {
                                                    case 'array':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['array', Array(
                                                                $,
                                                            )],
                                                        )
                                                    case 'boolean':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['boolean', Boolean(
                                                                $,
                                                            )],
                                                        )
                                                    case 'null':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['null', Null(
                                                                $,
                                                            )],
                                                        )
                                                    case 'number':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['number', Number(
                                                                $,
                                                            )],
                                                        )
                                                    case 'object':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['object', Object(
                                                                $,
                                                            )],
                                                        )
                                                    case 'string':
                                                        return p_.ss(
                                                            $,
                                                            ($) => ['string', String(
                                                                $,
                                                            )],
                                                        )
                                                    default:
                                                        return p_.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    )
                                case 'multiple':
                                    return p_.ss(
                                        $,
                                        ($) => ['multiple', {
                                            'array': p_change_context(
                                                $['array'],
                                                ($) => p_.from.optional(
                                                    $,
                                                ).map(
                                                    ($) => Array(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'boolean': p_change_context(
                                                $['boolean'],
                                                ($) => p_.from.optional(
                                                    $,
                                                ).map(
                                                    ($) => Boolean(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'null': p_change_context(
                                                $['null'],
                                                ($) => p_.from.optional(
                                                    $,
                                                ).map(
                                                    ($) => Null(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'number': p_change_context(
                                                $['number'],
                                                ($) => p_.from.optional(
                                                    $,
                                                ).map(
                                                    ($) => Number(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'object': p_change_context(
                                                $['object'],
                                                ($) => p_.from.optional(
                                                    $,
                                                ).map(
                                                    ($) => Object(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'string': p_change_context(
                                                $['string'],
                                                ($) => p_.from.optional(
                                                    $,
                                                ).map(
                                                    ($) => String(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }],
                                    )
                                default:
                                    return p_.au(
                                        $[0],
                                    )
                            }
                        },
                    )],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)

export const Const_Value: t_signatures.Const_Value = ($) => p_decide_state(
    $,
    ($): t_out.Const_Value => {
        switch ($[0]) {
            case 'array':
                return p_.ss(
                    $,
                    ($) => ['array', p_.from.list(
                        $,
                    ).map(
                        ($) => Const_Value(
                            $,
                        ),
                    )],
                )
            case 'boolean':
                return p_.ss(
                    $,
                    ($) => ['boolean', $],
                )
            case 'null':
                return p_.ss(
                    $,
                    ($) => ['null', null],
                )
            case 'number':
                return p_.ss(
                    $,
                    ($) => ['number', $],
                )
            case 'object':
                return p_.ss(
                    $,
                    ($) => ['object', p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => Const_Value(
                            $,
                        ),
                    )],
                )
            case 'string':
                return p_.ss(
                    $,
                    ($) => ['string', $],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)

export const Array: t_signatures.Array = ($) => ({
    'type': p_change_context(
        $['type'],
        ($) => p_decide_state(
            $,
            ($): t_out.Array.type_ => {
                switch ($[0]) {
                    case 'dynamic':
                        return p_.ss(
                            $,
                            ($) => ['dynamic', Schema(
                                $,
                            )],
                        )
                    case 'static':
                        return p_.ss(
                            $,
                            ($) => ['static', {
                                'properties': p_change_context(
                                    $['properties'],
                                    ($) => p_.from.dictionary(
                                        $,
                                    ).map(
                                        ($, id) => Schema(
                                            $,
                                        ),
                                    ),
                                ),
                            }],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const Boolean: t_signatures.Boolean = ($) => null

export const Null: t_signatures.Null = ($) => null

export const Number: t_signatures.Number = ($) => null

export const Object: t_signatures.Object = ($) => ({
    'type': p_change_context(
        $['type'],
        ($) => p_decide_state(
            $,
            ($): t_out.Object.type_ => {
                switch ($[0]) {
                    case 'static':
                        return p_.ss(
                            $,
                            ($) => ['static', Static_Object(
                                $,
                            )],
                        )
                    case 'dynamic':
                        return p_.ss(
                            $,
                            ($) => ['dynamic', Schema(
                                $,
                            )],
                        )
                    case 'mixed':
                        return p_.ss(
                            $,
                            ($) => ['mixed', {
                                'static': p_change_context(
                                    $['static'],
                                    ($) => Static_Object(
                                        $,
                                    ),
                                ),
                                'dynamic': p_change_context(
                                    $['dynamic'],
                                    ($) => Schema(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const Static_Object: t_signatures.Static_Object = ($) => ({
    'properties': p_change_context(
        $['properties'],
        ($) => p_.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'schema': p_change_context(
                    $['schema'],
                    ($) => Schema(
                        $,
                    ),
                ),
                'optional': p_change_context(
                    $['optional'],
                    ($) => $,
                ),
            }),
        ),
    ),
})

export const String: t_signatures.String = ($) => p_decide_state(
    $,
    ($): t_out.String => {
        switch ($[0]) {
            case 'any':
                return p_.ss(
                    $,
                    ($) => ['any', null],
                )
            case 'enum':
                return p_.ss(
                    $,
                    ($) => ['enum', p_.from.dictionary(
                        $,
                    ).map(
                        ($, id) => null,
                    )],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)
