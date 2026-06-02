
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/schema_for_legacy_json/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Document: t_signatures.Document = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "imports": null,
                    "definitions": null,
                    "schema": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'imports': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'imports',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.optional.literal.not_set(),
                            },
                        ),
                        ($) => _p.dictionary.from.dictionary(
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
                'definitions': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'definitions',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => Definitions(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'schema': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'schema',
                            'subdocument context': _p.optional.literal.not_set(),
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
)

export const Definitions: t_signatures.Definitions = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p.dictionary.from.dictionary(
        $['entries'],
    ).map(
        ($, id) => _p_change_context(
            v_unmarshalled_from_parse_tree.Verbose_Group(
                $,
                ($) => abort(
                    $,
                ),
                {
                    'expected properties': _p.dictionary.literal(
                        {
                            "definitions": null,
                            "schema": null,
                        },
                    ),
                    'subdocument context': _p.optional.literal.not_set(),
                },
            ),
            ($) => _p_variables(
                () => {
                    
                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                        $['value'],
                        {
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    )
                    return {
                        'definitions': _p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'definitions',
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => Definitions(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'schema': _p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'schema',
                                    'subdocument context': _p.optional.literal.not_set(),
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
        ),
    ),
)

export const Schema: t_signatures.Schema = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.Schema => {
            switch ($t) {
                case 'any':
                    return _p_change_context(
                        $['value'],
                        ($) => ['any', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'one of':
                    return _p_change_context(
                        $['value'],
                        ($) => ['one of', _p_change_context(
                            v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p.dictionary.from.dictionary(
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
                case 'type constraint':
                    return _p_change_context(
                        $['value'],
                        ($) => ['type constraint', _p_change_context(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                            ($) => _p.decide.text(
                                $['option']['token']['value'],
                                ($t): t_out.Schema.type_constraint => {
                                    switch ($t) {
                                        case 'single':
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ['single', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Schema.type_constraint.single => {
                                                            switch ($t) {
                                                                case 'array':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['array', Array(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'boolean':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['boolean', Boolean(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'null':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['null', Null(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'number':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['number', Number(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'object':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['object', Object(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'string':
                                                                    return _p_change_context(
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
                                                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                            return _p_change_context(
                                                $['value'],
                                                ($) => ['multiple', _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "array": null,
                                                                    "boolean": null,
                                                                    "null": null,
                                                                    "number": null,
                                                                    "object": null,
                                                                    "string": null,
                                                                },
                                                            ),
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                },
                                                            )
                                                            return {
                                                                'array': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'array',
                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p.optional.from.optional(
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
                                                                'boolean': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'boolean',
                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p.optional.from.optional(
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
                                                                'null': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'null',
                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p.optional.from.optional(
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
                                                                'number': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'number',
                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p.optional.from.optional(
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
                                                                'object': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'object',
                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p.optional.from.optional(
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
                                                                'string': _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'string',
                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p.optional.from.optional(
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
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                }],
                                            )
                                    }
                                },
                            ),
                        )],
                    )
                case 'reference':
                    return _p_change_context(
                        $['value'],
                        ($) => ['reference', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "document": null,
                                            "steps": null,
                                        },
                                    ),
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'document': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'document',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.optional.from.optional(
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
                                        'steps': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'steps',
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            ),
                                            ($) => _p.list.from.list(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                )['items'],
                                            ).map(
                                                ($) => _p_change_context(
                                                    $['value'],
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
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
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Array: t_signatures.Array = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "type": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'type': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['token']['value'],
                            ($t): t_out.Array.type_ => {
                                switch ($t) {
                                    case 'dynamic':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['dynamic', Schema(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'static':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['static', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {
                                                                "properties": null,
                                                            },
                                                        ),
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        )
                                                        return {
                                                            'properties': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'properties',
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                        },
                                                                    ),
                                                                    ($) => _p.dictionary.from.dictionary(
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
                                                        'subdocument context': _p.optional.literal.not_set(),
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

export const Object: t_signatures.Object = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "type": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'type': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['token']['value'],
                            ($t): t_out.Object.type_ => {
                                switch ($t) {
                                    case 'static':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['static', Static_Object(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'dynamic':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['dynamic', Schema(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'mixed':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['mixed', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {
                                                                "static": null,
                                                                "dynamic": null,
                                                            },
                                                        ),
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': _p.optional.literal.not_set(),
                                                            },
                                                        )
                                                        return {
                                                            'static': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'static',
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Static_Object(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'dynamic': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'dynamic',
                                                                        'subdocument context': _p.optional.literal.not_set(),
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
                                                        'subdocument context': _p.optional.literal.not_set(),
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

export const Static_Object: t_signatures.Static_Object = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "properties": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'properties': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'properties',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.optional.literal.not_set(),
                            },
                        ),
                        ($) => _p.dictionary.from.dictionary(
                            $['entries'],
                        ).map(
                            ($, id) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "schema": null,
                                                "optional": null,
                                            },
                                        ),
                                        'subdocument context': _p.optional.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                            {
                                                'subdocument context': _p.optional.literal.not_set(),
                                            },
                                        )
                                        return {
                                            'schema': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'schema',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Schema(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'optional': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'optional',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'type': ['true/false', null],
                                                        'subdocument context': _p.optional.literal.not_set(),
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

export const String: t_signatures.String = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['token']['value'],
        ($t): t_out.String => {
            switch ($t) {
                case 'any':
                    return _p_change_context(
                        $['value'],
                        ($) => ['any', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'enum':
                    return _p_change_context(
                        $['value'],
                        ($) => ['enum', _p_change_context(
                            v_unmarshalled_from_parse_tree.Dictionary(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p.dictionary.from.dictionary(
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
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
