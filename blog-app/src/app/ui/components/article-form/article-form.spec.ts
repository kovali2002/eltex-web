import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleForm } from './article-form';

describe('ArticleForm', () => {
  let component: ArticleForm;
  let fixture: ComponentFixture<ArticleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleForm);
    component = fixture.componentInstance;
  });

  it('should disable submit button while create form is invalid', async () => {
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    await fixture.whenStable();

    const submitButton = fixture.nativeElement.querySelector('.btn-save') as HTMLButtonElement;

    expect(submitButton.disabled).toBe(true);

    const titleInput = fixture.nativeElement.querySelector('#article-title') as HTMLInputElement;
    const textInput = fixture.nativeElement.querySelector('#article-text') as HTMLTextAreaElement;

    titleInput.value = 'Короткий заголовок';
    titleInput.dispatchEvent(new Event('input'));
    textInput.value = 'Текст статьи';
    textInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(submitButton.disabled).toBe(true);

    titleInput.value = 'Заголовок статьи достаточной длины для сохранения';
    titleInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(submitButton.disabled).toBe(false);
  });

  it('should populate form values for edit mode', async () => {
    fixture.componentRef.setInput('visible', true);
    fixture.componentRef.setInput('mode', 'edit');
    fixture.componentRef.setInput('initialDraft', {
      title: 'Заголовок статьи достаточной длины для редактирования',
      text: 'Обновленный текст статьи',
    });
    fixture.detectChanges();
    await fixture.whenStable();

    const title = fixture.nativeElement.querySelector('h2') as HTMLElement;
    const submitButton = fixture.nativeElement.querySelector('.btn-save') as HTMLButtonElement;
    const titleInput = fixture.nativeElement.querySelector('#article-title') as HTMLInputElement;
    const textInput = fixture.nativeElement.querySelector('#article-text') as HTMLTextAreaElement;

    expect(title.textContent).toContain('Изменить статью');
    expect(submitButton.textContent).toContain('Сохранить');
    expect(titleInput.value).toBe('Заголовок статьи достаточной длины для редактирования');
    expect(textInput.value).toBe('Обновленный текст статьи');
  });
});
