# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RocketComponent <a name="RocketComponent" id="rocketseat-component.RocketComponent"></a>

#### Initializers <a name="Initializers" id="rocketseat-component.RocketComponent.Initializer"></a>

```typescript
import { RocketComponent } from 'rocketseat-component'

new RocketComponent(parent: Construct, id: string, props?: IRocketComponent)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rocketseat-component.RocketComponent.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#rocketseat-component.RocketComponent.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rocketseat-component.RocketComponent.Initializer.parameter.props">props</a></code> | <code><a href="#rocketseat-component.IRocketComponent">IRocketComponent</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="rocketseat-component.RocketComponent.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="rocketseat-component.RocketComponent.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="rocketseat-component.RocketComponent.Initializer.parameter.props"></a>

- *Type:* <a href="#rocketseat-component.IRocketComponent">IRocketComponent</a>

---







## Protocols <a name="Protocols" id="Protocols"></a>

### IRocketComponent <a name="IRocketComponent" id="rocketseat-component.IRocketComponent"></a>

- *Implemented By:* <a href="#rocketseat-component.IRocketComponent">IRocketComponent</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rocketseat-component.IRocketComponent.property.stackPrefix">stackPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rocketseat-component.IRocketComponent.property.createDynamoDbTable">createDynamoDbTable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#rocketseat-component.IRocketComponent.property.lambdaCode">lambdaCode</a></code> | <code>aws-cdk-lib.aws_lambda.Code</code> | *No description.* |

---

##### `stackPrefix`<sup>Required</sup> <a name="stackPrefix" id="rocketseat-component.IRocketComponent.property.stackPrefix"></a>

```typescript
public readonly stackPrefix: string;
```

- *Type:* string

---

##### `createDynamoDbTable`<sup>Optional</sup> <a name="createDynamoDbTable" id="rocketseat-component.IRocketComponent.property.createDynamoDbTable"></a>

```typescript
public readonly createDynamoDbTable: boolean;
```

- *Type:* boolean

---

##### `lambdaCode`<sup>Optional</sup> <a name="lambdaCode" id="rocketseat-component.IRocketComponent.property.lambdaCode"></a>

```typescript
public readonly lambdaCode: Code;
```

- *Type:* aws-cdk-lib.aws_lambda.Code

---

