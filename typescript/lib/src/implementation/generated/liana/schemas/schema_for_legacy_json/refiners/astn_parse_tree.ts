
import * as p_ from 'pareto-core/dist/implementation/refiner'

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/dist/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Document: t_signatures.Document = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "imports": null,
                    "definitions": null,
                    "root": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'imports': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'imports',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => Document(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                    ),
                ),
                'definitions': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'definitions',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => Definitions(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'root': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'root',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Definitions: t_signatures.Definitions = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_.from.dictionary(
        $['entries'],
    ).map(
        ($, id) => Schema(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Schema: t_signatures.Schema = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_.from.text(
        $['option']['token']['value'],
    ).to_state($, 
        ($, $t): t_out.Schema => {
            switch ($t) {
                case 'any':
                    return p_change_context(
                        $['value'],
                        ($) => ['any', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'const':
                    return p_change_context(
                        $['value'],
                        ($) => ['const', Const_Value(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'one of':
                    return p_change_context(
                        $['value'],
                        ($) => ['one of', p_change_context(
                            v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => Schema(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        )],
                    )
                case 'reference':
                    return p_change_context(
                        $['value'],
                        ($) => ['reference', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "document": null,
                                            "definition": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'document': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'document',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(
                                                v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'definition': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'definition',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'type constraint':
                    return p_change_context(
                        $['value'],
                        ($) => ['type constraint', p_change_context(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                            ($) => p_.from.text(
                                $['option']['token']['value'],
                            ).to_state($, 
                                ($, $t): t_out.Schema.type_constraint => {
                                    switch ($t) {
                                        case 'single':
                                            return p_change_context(
                                                $['value'],
                                                ($) => ['single', p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => p_.from.text(
                                                        $['option']['token']['value'],
                                                    ).to_state($, 
                                                        ($, $t): t_out.Schema.type_constraint.single => {
                                                            switch ($t) {
                                                                case 'array':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['array', Array(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'boolean':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['boolean', Boolean(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'null':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['null', Null(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'number':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['number', Number(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'object':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['object', Object(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'string':
                                                                    return p_change_context(
                                                                        $['value'],
                                                                        ($) => ['string', String(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['liana', {
                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                            'range': v_parse_tree_to_location.Value(
                                                                                $['value'],
                                                                                {
                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                },
                                                                            ),
                                                                        }],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                )],
                                            )
                                        case 'multiple':
                                            return p_change_context(
                                                $['value'],
                                                ($) => ['multiple', p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "array": null,
                                                                    "boolean": null,
                                                                    "null": null,
                                                                    "number": null,
                                                                    "object": null,
                                                                    "string": null,
                                                                },
                                                            ),
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'array': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'array',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => p_.from.optional(
                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )['optional'],
                                                                    ).map(
                                                                        ($) => Array(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                ),
                                                                'boolean': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'boolean',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => p_.from.optional(
                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )['optional'],
                                                                    ).map(
                                                                        ($) => Boolean(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                ),
                                                                'null': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'null',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => p_.from.optional(
                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )['optional'],
                                                                    ).map(
                                                                        ($) => Null(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                ),
                                                                'number': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'number',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => p_.from.optional(
                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )['optional'],
                                                                    ).map(
                                                                        ($) => Number(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                ),
                                                                'object': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'object',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => p_.from.optional(
                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )['optional'],
                                                                    ).map(
                                                                        ($) => Object(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                ),
                                                                'string': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'string',
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => p_.from.optional(
                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )['optional'],
                                                                    ).map(
                                                                        ($) => String(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                ),
                                                            }
                                                        },
                                                    ),
                                                )],
                                            )
                                        default:
                                            return abort(
                                                ['liana', {
                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                    'range': v_parse_tree_to_location.Value(
                                                        $['value'],
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                }],
                                            )
                                    }
                                },
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Const_Value: t_signatures.Const_Value = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_.from.text(
        $['option']['token']['value'],
    ).to_state(
        $,
        ($, $t): t_out.Const_Value => {
            switch ($t) {
                case 'array':
                    return p_change_context(
                        $['value'],
                        ($) => ['array', p_.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => p_change_context(
                                $['value'],
                                ($) => Const_Value(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        )],
                    )
                case 'boolean':
                    return p_change_context(
                        $['value'],
                        ($) => ['boolean', v_unmarshalled_from_parse_tree.Boolean(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'type': ['true/false', null],
                                'subdocument context': p_.literal.not_set(),
                            },
                        )],
                    )
                case 'null':
                    return p_change_context(
                        $['value'],
                        ($) => ['null', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'number':
                    return p_change_context(
                        $['value'],
                        ($) => ['number', v_unmarshalled_from_parse_tree.Number(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'type': ['fractional decimal', {
                                    'digits': 0,
                                }],
                                'subdocument context': p_.literal.not_set(),
                            },
                        )],
                    )
                case 'object':
                    return p_change_context(
                        $['value'],
                        ($) => ['object', p_change_context(
                            v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => Const_Value(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        )],
                    )
                case 'string':
                    return p_change_context(
                        $['value'],
                        ($) => ['string', v_unmarshalled_from_parse_tree.Text(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Array: t_signatures.Array = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "type": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'type': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_.from.text(
                            $['option']['token']['value'],
                        ).to_state(
                            $,
                            ($, $t): t_out.Array.type_ => {
                                switch ($t) {
                                    case 'dynamic':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ['dynamic', Schema(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'static':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ['static', p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': p_.literal.dictionary(
                                                            {
                                                                "properties": null,
                                                            },
                                                        ),
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        )
                                                        return {
                                                            'properties': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'properties',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'subdocument context': p_.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => p_.from.dictionary(
                                                                        $['entries'],
                                                                    ).map(
                                                                        ($, id) => Schema(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        }
                                                    },
                                                ),
                                            )],
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Boolean: t_signatures.Boolean = ($, abort) => v_unmarshalled_from_parse_tree.Nothing(
    $,
    ($) => abort(
        $,
    ),
)

export const Null: t_signatures.Null = ($, abort) => v_unmarshalled_from_parse_tree.Nothing(
    $,
    ($) => abort(
        $,
    ),
)

export const Number: t_signatures.Number = ($, abort) => v_unmarshalled_from_parse_tree.Nothing(
    $,
    ($) => abort(
        $,
    ),
)

export const Object: t_signatures.Object = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "type": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'type': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_.from.text(
                            $['option']['token']['value'],
                        ).to_state($, 
                            ($, $t): t_out.Object.type_ => {
                                switch ($t) {
                                    case 'static':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ['static', Static_Object(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'dynamic':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ['dynamic', Schema(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'mixed':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ['mixed', p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': p_.literal.dictionary(
                                                            {
                                                                "static": null,
                                                                "dynamic": null,
                                                            },
                                                        ),
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        )
                                                        return {
                                                            'static': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'static',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Static_Object(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'dynamic': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'dynamic',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Schema(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                        }
                                                    },
                                                ),
                                            )],
                                        )
                                    default:
                                        return abort(
                                            ['liana', {
                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            }],
                                        )
                                }
                            },
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Static_Object: t_signatures.Static_Object = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "properties": null,
                },
            ),
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
            )
            return {
                'properties': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'properties',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': p_.literal.dictionary(
                                            {
                                                "schema": null,
                                                "optional": null,
                                            },
                                        ),
                                        'subdocument context': p_.literal.not_set(),
                                    },
                                ),
                                ($) => p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'schema': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'schema',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Schema(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'optional': p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'optional',
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['true/false', null],
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)

export const String: t_signatures.String = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_.from.text(
        $['option']['token']['value'],
    ).to_state($, 
        ($, $t): t_out.String => {
            switch ($t) {
                case 'any':
                    return p_change_context(
                        $['value'],
                        ($) => ['any', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'enum':
                    return p_change_context(
                        $['value'],
                        ($) => ['enum', p_change_context(
                            v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_.from.dictionary(
                                $['entries'],
                            ).map(
                                ($, id) => v_unmarshalled_from_parse_tree.Nothing(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
