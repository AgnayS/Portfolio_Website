import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { test } from "bun:test";
import matter from "gray-matter";

const directory = path.join(process.cwd(), "content/writing");

test("published writing has valid, unique metadata", () => {
  const files = fs.readdirSync(directory).filter((file) => file.endsWith(".mdx"));
  assert.ok(files.length > 0, "at least one MDX post should exist");

  const slugs = new Set();
  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const { data, content } = matter(
      fs.readFileSync(path.join(directory, file), "utf8"),
    );

    assert.ok(!slugs.has(slug), `duplicate writing slug: ${slug}`);
    slugs.add(slug);
    assert.equal(typeof data.title, "string", `${file} needs a title`);
    assert.equal(
      typeof data.description,
      "string",
      `${file} needs a description`,
    );
    assert.ok(!Number.isNaN(Date.parse(data.date)), `${file} needs a valid date`);
    assert.ok(content.trim().length > 0, `${file} cannot be empty`);
  }
});
