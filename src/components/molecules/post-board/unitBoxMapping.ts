interface CategoryMapping {
  title: string;
  color: string;
}

export const mainCategoryMappings: Record<string, CategoryMapping> = {
  자유: { title: '[자유]', color: '#abf7f7' },
  멘토멘티: { title: '[멘멘]', color: '#f99' },
  만남: { title: '[만남]', color: '#adff88' },
  장터: { title: '[장터]', color: '#ffee99' },
};

export const subCategoryMappings: Record<string, CategoryMapping> = {
  잡담: { title: '[잡담]', color: '#cdffff' },
  홍보: { title: '[홍보]', color: '#cdffff' },
  공부: { title: '[공부]', color: '#ffc2c2' },
  운동: { title: '[운동]', color: '#ffc2c2' },
  토익: { title: '[토익]', color: '#ffc2c2' },
  친구: { title: '[친구]', color: '#cbffb3' },
  밥약: { title: '[밥약]', color: '#cbffb3' },
  미팅: { title: '[미팅]', color: '#cbffb3' },
  책: { title: '[책]', color: '#fff4bc' },
  중고: { title: '[중고]', color: '#fff4bc' },
  자취방: { title: '[자취방]', color: '#fff4bc' },
};
