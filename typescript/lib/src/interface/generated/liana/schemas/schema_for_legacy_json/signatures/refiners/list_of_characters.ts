
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data"

export namespace Document_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: _pi.Abort<Document_.E>,
    parameters: {
        readonly 'tab size': Document_.P.tab_size
    },
) => Document_.O

export namespace Definitions_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Definitions
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Definitions_ = (
    context: Definitions_.I,
    abort: _pi.Abort<Definitions_.E>,
    parameters: {
        readonly 'tab size': Definitions_.P.tab_size
    },
) => Definitions_.O

export namespace Schema_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Schema
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
    parameters: {
        readonly 'tab size': Schema_.P.tab_size
    },
) => Schema_.O

export namespace Array_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Array
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Array_ = (
    context: Array_.I,
    abort: _pi.Abort<Array_.E>,
    parameters: {
        readonly 'tab size': Array_.P.tab_size
    },
) => Array_.O

export namespace Boolean_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Boolean
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Boolean_ = (
    context: Boolean_.I,
    abort: _pi.Abort<Boolean_.E>,
    parameters: {
        readonly 'tab size': Boolean_.P.tab_size
    },
) => Boolean_.O

export namespace Null_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Null
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Null_ = (
    context: Null_.I,
    abort: _pi.Abort<Null_.E>,
    parameters: {
        readonly 'tab size': Null_.P.tab_size
    },
) => Null_.O

export namespace Number_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Number
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Number_ = (
    context: Number_.I,
    abort: _pi.Abort<Number_.E>,
    parameters: {
        readonly 'tab size': Number_.P.tab_size
    },
) => Number_.O

export namespace Object_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Object
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Object_ = (
    context: Object_.I,
    abort: _pi.Abort<Object_.E>,
    parameters: {
        readonly 'tab size': Object_.P.tab_size
    },
) => Object_.O

export namespace Static_Object_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Static_Object
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Static_Object_ = (
    context: Static_Object_.I,
    abort: _pi.Abort<Static_Object_.E>,
    parameters: {
        readonly 'tab size': Static_Object_.P.tab_size
    },
) => Static_Object_.O

export namespace String_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.String
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type String_ = (
    context: String_.I,
    abort: _pi.Abort<String_.E>,
    parameters: {
        readonly 'tab size': String_.P.tab_size
    },
) => String_.O

export { 
    Document_ as Document, 
    Definitions_ as Definitions, 
    Schema_ as Schema, 
    Array_ as Array, 
    Boolean_ as Boolean, 
    Null_ as Null, 
    Number_ as Number, 
    Object_ as Object, 
    Static_Object_ as Static_Object, 
    String_ as String, 
}
