import * as sh from "../shorthands/schema_for_legacy_json"

export const $ = sh.schema(
    {
        "schema": sh.d.any_of(
            {
                'boolean': sh.ao.boolean(),
                'object': sh.ao.object_verbose_group({
                    //Meta-schemas and vocabularies https://json-schema.org/draft/2020-12/json-schema-core#name-meta-schemas-and-vocabulari
                    "$schema": sh.property(sh.d.string(), 'optional'), //8.1.1
                    "$vocabulary": sh.property(sh.d.object_dictionary(sh.d.boolean()), 'optional'), //8.1.2

                    //Base URI, Anchors, and Dereferencing https://json-schema.org/draft/2020-12/json-schema-core#name-base-uri-anchors-and-derefe
                    "$id": sh.property(sh.d.string(), 'optional'), //8.2.1
                    "$ref": sh.property(sh.d.string(), 'optional'), //8.2.3.1
                    "$dynamicAnchor": sh.property(sh.d.string(), 'optional'), //8.2.?
                    "$anchor": sh.property(sh.d.string(), 'optional'), //8.2.?
                    "$dynamicRef": sh.property(sh.d.string(), 'optional'), //8.2.3.2
                    "$defs": sh.property(sh.d.object_dictionary(sh.d.definition_reference("schema")), 'optional'), //8.2.4
                    "$comment": sh.property(sh.d.string(), 'optional'), //8.3


                    //any instance https://json-schema.org/draft/2020-12/json-schema-validation#name-type
                    "type": sh.property(sh.d.any_of( //6.1.1
                        {
                            'string': sh.ao.string(),
                            'array': sh.ao.array_list(sh.d.enum_({ "array": null, "boolean": null, "null": null, "number": null, "object": null, "string": null })),
                        }
                    ), 'optional'),
                    "enum": sh.property(sh.d.array_list(sh.d.any()), 'optional'), //6.1.2
                    "const": sh.property(sh.d.any(), 'optional'), //6.1.3

                    //numeric instance https://json-schema.org/draft/2020-12/json-schema-validation#name-validation-keywords-for-num
                    "multipleOf": sh.property(sh.d.number(), 'optional'), //6.2.1
                    "maximum": sh.property(sh.d.number(), 'optional'), //6.2.2
                    "exclusiveMaximum": sh.property(sh.d.number(), 'optional'), //6.2.3
                    "minimum": sh.property(sh.d.number(), 'optional'), //6.2.4
                    "exclusiveMinimum": sh.property(sh.d.number(), 'optional'), //6.2.5

                    //strings 6.3 https://json-schema.org/draft/2020-12/json-schema-validation#name-validation-keywords-for-str
                    "maxLength": sh.property(sh.d.number(), 'optional'), //6.3.1
                    "minLength": sh.property(sh.d.number(), 'optional'), //6.3.2
                    "pattern": sh.property(sh.d.string(), 'optional'), //6.3.3

                    //arrays 6.4 https://json-schema.org/draft/2020-12/json-schema-validation#name-validation-keywords-for-arr
                    "maxItems": sh.property(sh.d.number(), 'optional'), //6.4.1
                    "minItems": sh.property(sh.d.number(), 'optional'), //6.4.2
                    "uniqueItems": sh.property(sh.d.boolean(), 'optional'), //6.4.3
                    "maxContains": sh.property(sh.d.number(), 'optional'), //6.4.4
                    "minContains": sh.property(sh.d.number(), 'optional'), //6.4.5

                    //objects 6.5 https://json-schema.org/draft/2020-12/json-schema-validation#name-validation-keywords-for-obj
                    "maxProperties": sh.property(sh.d.number(), 'optional'), //6.5.1
                    "minProperties": sh.property(sh.d.number(), 'optional'), //6.5.2
                    "required": sh.property(sh.d.array_list(sh.d.string()), 'optional'), //6.5.3
                    "dependentRequired": sh.property(sh.d.object_dictionary(sh.d.array_list(sh.d.string())), 'optional'), //6.5.4

                    //format 7 https://json-schema.org/draft/2020-12/json-schema-validation#name-foreword
                    "format": sh.property(sh.d.string(), 'optional'), //7.1

                    //contents of string-encoded data 8 https://json-schema.org/draft/2020-12/json-schema-validation#name-a-vocabulary-for-the-conten
                    "contentEncoding": sh.property(sh.d.string(), 'optional'), //8.3
                    "contentMediaType": sh.property(sh.d.string(), 'optional'), //8.4
                    "contentSchema": sh.property(sh.d.definition_reference("schema"), 'optional'), //8.5

                    //basic meta-data annotations 9 https://json-schema.org/draft/2020-12/json-schema-validation#name-a-vocabulary-for-basic-meta
                    "title": sh.property(sh.d.string(), 'optional'), //9.1
                    "description": sh.property(sh.d.string(), 'optional'), //9.1
                    "default": sh.property(sh.d.any(), 'optional'), //9.2
                    "deprecated": sh.property(sh.d.boolean(), 'optional'), //9.3
                    "readOnly": sh.property(sh.d.boolean(), 'optional'), //9.4
                    "writeOnly": sh.property(sh.d.boolean(), 'optional'), //9.4
                    "examples": sh.property(sh.d.array_list(sh.d.any()), 'optional'), //9.5

                    //applying subschemas with logic https://json-schema.org/draft/2020-12/json-schema-core#name-keywords-for-applying-subsch
                    "allOf": sh.property(sh.d.array_list(sh.d.definition_reference("schema")), 'optional'), //10.2.1.1
                    "anyOf": sh.property(sh.d.array_list(sh.d.definition_reference("schema")), 'optional'), //10.2.1.2
                    "oneOf": sh.property(sh.d.array_list(sh.d.definition_reference("schema")), 'optional'), //10.2.1.3
                    "not": sh.property(sh.d.definition_reference("schema"), 'optional'), //10.2.1.4

                    //applying subschemas conditionally https://json-schema.org/draft/2020-12/json-schema-core#name-keywords-for-applying-subsche
                    "if": sh.property(sh.d.definition_reference("schema"), 'optional'), //10.2.2.1
                    "then": sh.property(sh.d.definition_reference("schema"), 'optional'), //10.2.2.2
                    "else": sh.property(sh.d.definition_reference("schema"), 'optional'), //10.2.2.3
                    "dependentSchemas": sh.property(sh.d.object_dictionary(sh.d.definition_reference("schema")), 'optional'), //10.2.2.4

                    //applying subschemas to arrays https://json-schema.org/draft/2020-12/json-schema-core#name-keywords-for-applying-subschema
                    "additionalItems": sh.property(sh.d.definition_reference("schema"), 'optional'), // deprecated
                    "prefixItems": sh.property(sh.d.array_list(sh.d.definition_reference("schema")), 'optional'), //10.3.1.1
                    "items": sh.property(sh.d.any_of( //10.3.1.2
                        {
                            'array': sh.ao.array_list(sh.d.definition_reference("schema")), //deprecated, replaced by prefixItems
                        },
                        "schema",
                    ), 'optional'),
                    "contains": sh.property(sh.d.definition_reference("schema"), 'optional'), //10.3.1.3

                    //applying subschemas to objects https://json-schema.org/draft/2020-12/json-schema-core#name-keywords-for-applying-subschemas
                    "properties": sh.property(sh.d.object_dictionary(sh.d.definition_reference("schema")), 'optional'), //10.3.2.1
                    "patternProperties": sh.property(sh.d.object_dictionary(sh.d.definition_reference("schema")), 'optional'), //10.3.2.2
                    "additionalProperties": sh.property(sh.d.definition_reference("schema"), 'optional'), //10.3.2.3
                    "propertyNames": sh.property(sh.d.definition_reference("schema"), 'optional'), //10.3.2.4 (this is weird, but it really is a schema, not a string)

                    //deprecated keywords
                    "dependencies": sh.property(sh.d.object_dictionary(sh.d.any_of(
                        {
                            'array': sh.ao.array_list(sh.d.string()),
                        },
                        "schema",
                    )), 'optional'),
                    "definitions": sh.property(sh.d.object_dictionary(sh.d.definition_reference("schema")), 'optional'), //8.2.4

                    // "enumDescriptions": property(d.array_list(d.string())),

                    //kubernetes extensions
                    "x-kubernetes-group-version-kind": sh.property(sh.d.any(), 'optional'),
                    "x-kubernetes-list-map-key": sh.property(sh.d.any(), 'optional'),
                    "x-kubernetes-list-map-keys": sh.property(sh.d.any(), 'optional'),
                    "x-kubernetes-list-type": sh.property(sh.d.any(), 'optional'),
                    "x-kubernetes-patch-merge-key": sh.property(sh.d.any(), 'optional'),
                    "x-kubernetes-patch-strategy": sh.property(sh.d.any(), 'optional'),
                    "x-kubernetes-unions": sh.property(sh.d.any(), 'optional'),


                    //abc
                    "abcAreAllocationMethodsHomogeneous": sh.property(sh.d.any(), 'optional'),
                    "abcDoMaterialIDsExist": sh.property(sh.d.any(), 'optional'),
                    "abcHasNonOverlappingTimeDependentValues": sh.property(sh.d.any(), 'optional'),
                    "abcHasUninterruptedTimeDependentValues": sh.property(sh.d.any(), 'optional'),
                    "abcIsAcyclic": sh.property(sh.d.any(), 'optional'),
                    "abcIsAfter0001-01-01": sh.property(sh.d.any(), 'optional'),
                    "abcIsBefore9999-12-31": sh.property(sh.d.any(), 'optional'),
                    "abcIsExpirationDateOnOrAfterManufactureDate": sh.property(sh.d.any(), 'optional'),
                    "abcIsExpirationDateOnOrAfterReleaseDate": sh.property(sh.d.any(), 'optional'),
                    "abcIsFirstDayOfMonth": sh.property(sh.d.any(), 'optional'),
                    "abcIsLastDayOfMonth": sh.property(sh.d.any(), 'optional'),
                    "abcIsReleaseDateOnOrAfterManufactureDate": sh.property(sh.d.any(), 'optional'),
                    "abcIsReleaseDateOnOrAfterPlanDate": sh.property(sh.d.any(), 'optional'),
                    "abcIsValidColor": sh.property(sh.d.any(), 'optional'),
                    "abcNoDuplicateValuesForOrderingProperty": sh.property(sh.d.any(), 'optional'),

                    //kestra
                    "$metrics": sh.property(sh.d.any(), 'optional'),
                    "$deprecated": sh.property(sh.d.any(), 'optional'),


                    "$dynamic": sh.property(sh.d.any(), 'optional'), //FIXME
                    "id": sh.property(sh.d.string(), 'optional'), //FIXME
                    "allowTrailingCommas": sh.property(sh.d.boolean(), 'optional'), //FIXME


                    // "$xsd-full-type": property(d.any()),
                    // "$xsd-type": property(d.any()),
                    // "additionalItems": property(d.any()),
                    // "allowTrailingCommas": property(d.any()),
                    // "app_config": property(d.any()),
                    // "Aql": property(d.any()),
                    // "authors": property(d.any()),
                    // "azure_config": property(d.any()),
                    // "BashStep": property(d.any()),
                    // "BuildInfo": property(d.any()),
                    // "campfire": property(d.any()),
                    // "client_config": property(d.any()),
                    // "container_service_config": property(d.any()),
                    // "contains": property(d.any()),
                    // "contentMediaType": property(d.any()),
                    // "create": property(d.any()),
                    // "CreateReleaseBundle": property(d.any()),
                    // "CronTrigger": property(d.any()),
                    // "databricks": property(d.any()),
                    // "defaultRegions": property(d.any()),
                    // "defaultSnippets": property(d.any()),
                    // "defs": property(d.any()),
                    // "delete": property(d.any()),
                    // "dependencies": property(d.any()),
                    // "deprecationMessage": property(d.any()),
                    // "description_old": property(d.any()),
                    // "DistributeReleaseBundle": property(d.any()),
                    // "DistributionRule": property(d.any()),
                    // "DockerBuild": property(d.any()),
                    // "DockerPush": property(d.any()),
                    // "else": property(d.any()),
                    // "email": property(d.any()),
                    // "enumDescriptions": property(d.any()),
                    // "EnvironmentVariables": property(d.any()),
                    // "example": property(d.any()),
                    // "exclusiveMaximum": property(d.any()),
                    // "exclusiveMinimum": property(d.any()),
                    // "execution": property(d.any()),
                    // "existingJavaType": property(d.any()),
                    // "explainer": property(d.any()),
                    // "fallback": property(d.any()),
                    // "fileMatch": property(d.any()),
                    // "FileSpec": property(d.any()),
                    // "flowdock": property(d.any()),
                    // "full": property(d.any()),
                    // "generic": property(d.any()),
                    // "github.com": property(d.any()),
                    // "GitRepo": property(d.any()),
                    // "GoBuild": property(d.any()),
                    // "GoPublishBinary": property(d.any()),
                    // "GoPublishModule": property(d.any()),
                    // "GradleBuild": property(d.any()),
                    // "HelmBlueGreenCleanup": property(d.any()),
                    // "HelmBlueGreenDeploy": property(d.any()),
                    // "HelmBlueGreenRoleSwitch": property(d.any()),
                    // "HelmChart": property(d.any()),
                    // "HelmDeploy": property(d.any()),
                    // "HelmPublish": property(d.any()),
                    // "hipchat": property(d.any()),
                    // "hosts": property(d.any()),
                    // "Image": property(d.any()),
                    // "IncomingWebhook": property(d.any()),
                    // "interface": property(d.any()),
                    // "irc": property(d.any()),
                    // "Jenkins": property(d.any()),
                    // "links": property(d.any()),
                    // "local": property(d.any()),
                    "markdownDescription": sh.property(sh.d.any(), 'optional'),
                    // "markdownEnumDescriptions": property(d.any()),
                    // "Matrix": property(d.any()),
                    // "meta": property(d.any()),
                    // "metatag": property(d.any()),
                    // "multipleOf": property(d.any()),
                    // "MvnBuild": property(d.any()),
                    // "name": property(d.any()),
                    // "not": property(d.any()),
                    // "NpmBuild": property(d.any()),
                    // "NpmPublish": property(d.any()),
                    // "options": property(d.any()),
                    // "OutgoingWebhook": property(d.any()),
                    // "postActions": property(d.any()),
                    // "PostMatrix": property(d.any()),
                    // "PowerShell": property(d.any()),
                    // "PreMatrix": property(d.any()),
                    // "PromoteBuild": property(d.any()),
                    // "PropertyBag": property(d.any()),
                    // "propertyNames": property(d.any()),
                    // "PublishBuildInfo": property(d.any()),
                    // "PushArtifactoryPackage": property(d.any()),
                    // "pushover": property(d.any()),
                    // "PWA": property(d.any()),
                    // "reference": property(d.any()),
                    // "reference metadata": property(d.any()),
                    // "refs": property(d.any()),
                    // "ReleaseBundle": property(d.any()),
                    // "RemoteFile": property(d.any()),
                    // "RequiresApproval": property(d.any()),
                    // "resource_config": property(d.any()),
                    // "resource_group": property(d.any()),
                    // "scope": property(d.any()),
                    // "services": property(d.any()),
                    // "SignReleaseBundle": property(d.any()),
                    // "slack": property(d.any()),
                    // "specific": property(d.any()),
                    // "StepExecutionStates": property(d.any()),
                    // "store_private_key_material": property(d.any()),
                    // "store_public_key_material": property(d.any()),
                    // "string": property(d.any()),
                    // "Task": property(d.any()),
                    // "titles": property(d.any()),
                    // "TriggerPipeline": property(d.any()),
                    // "tsType": property(d.any()),
                    // "typeof": property(d.any()),
                    // "valid_values": property(d.any()),
                    // "version": property(d.any()),
                    // "VmCluster": property(d.any()),
                    // "webhooks": property(d.any()),
                    "x-intellij-enum-metadata": sh.property(sh.d.any(), 'optional'),
                    "x-intellij-html-description": sh.property(sh.d.any(), 'optional'),
                    "x-intellij-language-injection": sh.property(sh.d.any(), 'optional'),
                    "x-taplo": sh.property(sh.d.any(), 'optional'),
                    "x-taplo-info": sh.property(sh.d.any(), 'optional'),
                    "x-tombi-array-values-order": sh.property(sh.d.any(), 'optional'),
                    "x-tombi-table-keys-order": sh.property(sh.d.any(), 'optional'),
                    "x-tombi-toml-version": sh.property(sh.d.any(), 'optional'),
                    "XrayScan": sh.property(sh.d.any(), 'optional'),
                })
            },
        )
    },
    "schema",
)