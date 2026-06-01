
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "../../data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Array_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Array
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Array_ = (
    context: Array_.I,
    abort: _pi.Abort<Array_.E>,
) => Array_.O

export namespace Boolean_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Boolean
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Boolean_ = (
    context: Boolean_.I,
    abort: _pi.Abort<Boolean_.E>,
) => Boolean_.O

export namespace Null_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Null
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Null_ = (
    context: Null_.I,
    abort: _pi.Abort<Null_.E>,
) => Null_.O

export namespace Number_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Number
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Number_ = (
    context: Number_.I,
    abort: _pi.Abort<Number_.E>,
) => Number_.O

export namespace Object_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Object
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Object_ = (
    context: Object_.I,
    abort: _pi.Abort<Object_.E>,
) => Object_.O

export namespace String_ {
    
    export type I = i_in.Value
    
    export type O = i_out.String
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type String_ = (
    context: String_.I,
    abort: _pi.Abort<String_.E>,
) => String_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
) => Value_.O

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

export { 
    Array_ as Array, 
    Boolean_ as Boolean, 
    Null_ as Null, 
    Number_ as Number, 
    Object_ as Object, 
    String_ as String, 
    Value_ as Value, 
    Schema_ as Schema, 
}
