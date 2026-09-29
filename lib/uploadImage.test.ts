import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ post: vi.fn(), remove: vi.fn() }));

vi.mock("@/config/apiClient", () => ({
  secureApi: { post: mocks.post, delete: mocks.remove },
}));

import { deleteFileFromServer, uploadImages } from "./uploadImage";

describe("managed uploads", () => {
  beforeEach(() => {
    mocks.post.mockReset();
    mocks.remove.mockReset();
  });

  it("returns the server-owned asset IDs", async () => {
    mocks.post.mockResolvedValue({
      data: {
        success: true,
        assets: [{ assetId: "asset-1", url: "https://files.test/a.pdf", publicId: "users/a", mimeType: "application/pdf", sizeBytes: 42 }],
      },
    });

    await expect(uploadImages([new File(["pdf"], "a.pdf")])).resolves.toEqual([
      expect.objectContaining({ assetId: "asset-1" }),
    ]);
  });

  it("deletes a temporary upload by asset ID", async () => {
    mocks.remove.mockResolvedValue({ data: { success: true } });

    await deleteFileFromServer("asset/with spaces");

    expect(mocks.remove).toHaveBeenCalledWith("/api/v1/media/asset%2Fwith%20spaces");
  });
});
