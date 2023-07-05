import * as S from '../CreatorForm.styles';
import React from 'react';
import { LessonsTable } from '@app/components/tables/LessonsTable/LessonsTable';
import { BaseFormList } from '@app/components/common/forms/components/BaseFormList/BaseFormList';
import { FormListFieldData } from 'antd';

export const Step2: React.FC = () => {
  return (
    <S.FormContent>
      <BaseFormList name="lessons">
        {(fields: FormListFieldData[], { add, remove }: any) => <LessonsTable fields={fields} add={add} remove={remove} />}
      </BaseFormList>
    </S.FormContent>
  );
};

/*      <BaseFormList name="lessons">
      {(fields, { add, remove }) => (
        <>
              {fields.map((field) => (
                <BaseSpace
                  key={`${field.key}-${field.name}`}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <BaseForm.Item
                    name={[field.name, "item_code"]}
                  >
                    <BaseInput placeholder="Item Code" />
                  </BaseForm.Item>
                  <BaseForm.Item
                    name={[field.name, "quantity"]}
                  >
                    <BaseInput placeholder="Quantity" />
                  </BaseForm.Item>
                  <BaseForm.Item
                    name={[field.name, "special_requirements"]}
                  >
                    <BaseInput placeholder="Quantity" />
                  </BaseForm.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </BaseSpace>
              ))}
              <BaseForm.Item>
                <BaseButton
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add item
                </BaseButton>
              </BaseForm.Item>
            </>
          )}
      </BaseFormList>*/
