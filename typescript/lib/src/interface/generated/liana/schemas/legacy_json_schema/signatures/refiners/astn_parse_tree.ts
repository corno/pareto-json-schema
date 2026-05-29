
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "../../data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Array_Definition_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Array_Definition
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Array_Definition_ = (
    context: Array_Definition_.I,
    abort: _pi.Abort<Array_Definition_.E>,
) => Array_Definition_.O

export namespace Boolean_Definition_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Boolean_Definition
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Boolean_Definition_ = (
    context: Boolean_Definition_.I,
    abort: _pi.Abort<Boolean_Definition_.E>,
) => Boolean_Definition_.O

export namespace Null_Definition_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Null_Definition
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Null_Definition_ = (
    context: Null_Definition_.I,
    abort: _pi.Abort<Null_Definition_.E>,
) => Null_Definition_.O

export namespace Number_Definition_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Number_Definition
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Number_Definition_ = (
    context: Number_Definition_.I,
    abort: _pi.Abort<Number_Definition_.E>,
) => Number_Definition_.O

export namespace Object_Definition_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Object_Definition
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Object_Definition_ = (
    context: Object_Definition_.I,
    abort: _pi.Abort<Object_Definition_.E>,
) => Object_Definition_.O

export namespace String_Definition_ {
    
    export type I = i_in.Value
    
    export type O = i_out.String_Definition
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type String_Definition_ = (
    context: String_Definition_.I,
    abort: _pi.Abort<String_Definition_.E>,
) => String_Definition_.O

export namespace Definition_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Definition
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Definition_ = (
    context: Definition_.I,
    abort: _pi.Abort<Definition_.E>,
) => Definition_.O

export namespace Schema_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
) => Schema_.O

export namespace Error_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Error
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Error_ = (
    context: Error_.I,
    abort: _pi.Abort<Error_.E>,
) => Error_.O

export namespace Value_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_Type_ = (
    context: Value_Type_.I,
    abort: _pi.Abort<Value_Type_.E>,
) => Value_Type_.O

export { 
    Array_Definition_ as Array_Definition, 
    Boolean_Definition_ as Boolean_Definition, 
    Null_Definition_ as Null_Definition, 
    Number_Definition_ as Number_Definition, 
    Object_Definition_ as Object_Definition, 
    String_Definition_ as String_Definition, 
    Definition_ as Definition, 
    Schema_ as Schema, 
    Error_ as Error, 
    Value_Type_ as Value_Type, 
}
