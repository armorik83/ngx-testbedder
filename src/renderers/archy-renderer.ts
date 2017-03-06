import { TreeNode } from '../tree-builder';
import { AbstractRenderer } from './abstract-renderer';
import { Solved } from '../solver';

const archy = require('archy')

export class ArchyRenderer extends AbstractRenderer {

  render(tree: {treeNode: TreeNode, solveds: Solved[]}): string {
    return archy(tree.treeNode)
  }

}