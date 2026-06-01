import * as sh from "../../shorthands/schema_for_legacy_json"

export const $ = sh.schema(
    {
        "Serialization Chunk": sh.v.object_dynamic(sh.v.object_static({
            "serializationFormatVersion": sh.property(sh.v.string()),
            "languages": sh.property(sh.v.array_dynamic(sh.v.object_static({
                "key": sh.property(sh.v.string()),
                "version": sh.property(sh.v.string()),
            }))),
            "nodes": sh.property(sh.v.array_dynamic(sh.v.object_static({
                "id": sh.property(sh.v.string()),
                "classifier": sh.property(sh.v.definition_reference("Meta Pointer")),
                "properties": sh.property(sh.v.array_dynamic(sh.v.object_static({
                    "property": sh.property(sh.v.definition_reference("Meta Pointer")),
                    "value": sh.property(sh.v.string()),
                }))),
                "containments": sh.property(sh.v.array_dynamic(sh.v.object_static({
                    "containment": sh.property(sh.v.definition_reference("Meta Pointer")),
                    "children": sh.property(sh.v.array_dynamic(sh.v.string())),
                }))),
                "references": sh.property(sh.v.array_dynamic(sh.v.object_static({
                    "reference": sh.property(sh.v.definition_reference("Meta Pointer")),
                    "targets": sh.property(sh.v.array_dynamic(sh.v.object_static({
                        "resolveInfo": sh.property(sh.v.string()),
                        "reference": sh.property(sh.v.any_of({ 'null': sh.ao.null_(), 'string': sh.ao.string() })),
                    }))),
                }))),
                "annotations": sh.property(sh.v.array_dynamic(sh.v.string())),
                "parent": sh.property(sh.v.any_of({ 'null': sh.ao.null_(), 'string': sh.ao.string() })),
            })))
        })),
        "Meta Pointer": sh.v.object_static({
            "language": sh.property(sh.v.string()),
            "version": sh.property(sh.v.string()),
            "key": sh.property(sh.v.string()),
        })
    },
    "Serialization Chunk"
)