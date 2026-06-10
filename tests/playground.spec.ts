import { expect, test } from '@playwright/test';

test('Find "Add to shelf" button', async({ page }) => {
  await page.goto('/playground');
  await expect(page.getByRole('button', { name: 'Add to shelf'})).toBeVisible();
});

test('Find "Cancel" button"', async({ page }) => {
  await page.goto('/playground');
  await expect(page.getByRole('button', { name: 'Cancel'})).toBeVisible();
});

test('Find "Out of stock" button" and check is disabled', async({ page }) => {
  await page.goto('/playground');
  await expect(page.getByRole('button', { name: 'Out of stock'})).toBeDisabled();
});

test('Find "Search" input', async({ page }) => {
  await page.goto('/playground');
  await expect(page.getByLabel('Search')).toBeVisible();
});

test('Find "Delete" button', async({ page }) => {
  await page.goto('/playground');
  await expect(page.getByRole('button', { name: 'Delete' }).first()).toBeVisible();
});

test('"Remove" in the third list item', async({ page }) => {
  await page.goto('/playground');

  const readingList = page.getByRole('list', {name: 'Reading list'});
  const thirdListItwem = readingList.getByRole('listitem').nth(2);
  await expect(thirdListItwem.getByRole('button', { name: 'Remove'})).toBeVisible(); 
});

test('Find "Author" input and check hint', async({ page }) => {
  await page.goto('/playground');

  await expect(page.getByLabel('Author')).toBeVisible();
  const hint = page.getByLabel('Last name, first name');
  await expect(hint).toBeVisible();
});

test('Find "Rate this book" inside article', async({ page }) => {
  await page.goto('/playground');

  const article = page.getByRole('article', { name: /Piranesi by Susanna Clarke/}).getByRole('button', { name: 'Rate this book' });
  await article.isVisible();
})